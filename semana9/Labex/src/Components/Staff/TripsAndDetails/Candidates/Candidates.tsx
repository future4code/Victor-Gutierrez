import React from 'react';
import { useLabeX_getTripDetail } from '../../../../Hooks/useLabeX';
import { LabeX_decideCandidate } from '../../../../Hooks/useLabeX';
import { Card, ListRoll, ListItem, Wrapper } from './Candidates_styles';
import { SimpleIdProp } from '../../../../Types/interfaces';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

export default function Candidates({ id }: SimpleIdProp) {
    const [tripDetails] = useLabeX_getTripDetail(id);

    console.log(tripDetails);
    const tripName = tripDetails.name || '';
    const candidates = tripDetails.candidates || [];
    const approved = tripDetails.approved || [];

    const handleDenial = (CandidateId: string) => {
        LabeX_decideCandidate(false, id, CandidateId);
    };
    const handleApproval = (CandidateId: string) => {
        LabeX_decideCandidate(true, id, CandidateId);
    };

    return (
        <>
            <Wrapper>
                <h2>
                    A administração de viagens não pode ser feita por
                    dispositivos móveis.
                </h2>
                <Card>
                    <ListRoll>
                        {tripName.length < 1 ? (
                            <h1>Lista de candidatos</h1>
                        ) : (
                            <h1>Candidatos para {tripName}</h1>
                        )}
                        {candidates.map((item) => {
                            return (
                                <ListItem key={item.id}>
                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.age}</p>
                                        <p>{item.country}</p>
                                        <p>{item.profession}</p>
                                        <p>{item.applicationText}</p>
                                    </div>
                                    <span>
                                        <AiFillLike
                                            onClick={() =>
                                                handleApproval(item.id)
                                            }
                                        />
                                        <AiFillDislike
                                            onClick={() =>
                                                handleDenial(item.id)
                                            }
                                        />
                                    </span>
                                </ListItem>
                            );
                        })}
                    </ListRoll>
                </Card>
                <Card>
                    <ListRoll>
                        {tripName.length < 1 ? (
                            <h1>Lista de Aprovados</h1>
                        ) : (
                            <h1>Aprovados para {tripName}</h1>
                        )}
                        {approved.map((item) => {
                            return (
                                <ListItem>
                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.age}</p>
                                        <p>{item.country}</p>
                                        <p>{item.profession}</p>
                                    </div>
                                </ListItem>
                            );
                        })}
                    </ListRoll>
                </Card>
            </Wrapper>
        </>
    );
}
