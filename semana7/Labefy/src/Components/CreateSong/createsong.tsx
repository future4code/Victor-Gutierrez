import React, { useState, useEffect } from 'react';
import api from './../../Services/api';
import { Container, AddSong } from './createSongStyles';
import { IoIosAddCircleOutline } from 'react-icons/io';
import deezer from './../../Services/deezer';

interface songRequest {
    name: string;
    artist: string | undefined;
    url: string;
}

export default function Createsong(props) {
    const [newSong, setNewSong] = useState<songRequest>({
        name: '',
        artist: '',
        url: '',
    });
    const [showForm, setFormState] = useState<boolean>(false);
    const [list, setList] = useState<any>([]);
    const [artist, setArtist] = useState<string>();

    useEffect(() => {
        deezer.get(`/search?q=${artist}`).then((response) => {
            setList(response.data.data);
        });
    }, [artist]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setArtist(e.target.value);
    };

    const handleSong = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const FindSong = list.findIndex((i) => {
            return i.id === Number(e.target.value);
        });

        setNewSong({
            artist: list[FindSong].artist.name,
            url: list[FindSong].preview,
            name: list[FindSong].title_short,
        });
    };

    const SendInformation = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const requestBody = newSong;

        try {
            await api.post(`/playlists/${props.id}/tracks`, requestBody);
            setFormState(!showForm);
        } catch (error) {}
    };

    return (
        <>
            <AddSong
                title="Clique aqui para inserir uma música"
                onClick={() => {
                    setFormState(!showForm);
                }}
            >
                <IoIosAddCircleOutline size={50} />{' '}
                <p>{showForm === false ? 'Adicionar Música' : 'Fechar'}</p>
            </AddSong>

            {showForm === false ? (
                ''
            ) : (
                <>
                    <Container onSubmit={SendInformation}>
                        <input
                            type="text"
                            onChange={handleSearch}
                            placeholder={`Buscar`}
                            value={artist}
                            title="Busque por um artista, uma música ou um gênero e veja os resultados no campo abaixo, você só precisa digitar !"
                        />
                        <select onChange={handleSong}>
                            <option value="0">Selecione uma música</option>
                            {list === undefined ||
                            list === [] ||
                            list.lenght === 0
                                ? ''
                                : list.map((i) => (
                                      <option key={i.id} value={i.id}>
                                          {i.title} - {i.artist.name}
                                      </option>
                                  ))}
                        </select>
                        <button type="submit">Adicionar música</button>
                    </Container>
                </>
            )}
        </>
    );
}
