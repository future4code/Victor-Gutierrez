import React, { useState } from "react";
import { Container, Final, Error, Display } from "./styles";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [scholar, setScholar] = useState("Ensino Médio Completo");
    const [age, setAge] = useState("");
    const [page, setPage] = useState(1);
    const [course, setCourse] = useState("");
    const [institutions, setInstitution] = useState("");
    const [motivation, setWhy] = useState("");
    const [complements, setCompl] = useState("");
    const [error, setError] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
        setError("");
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setError("");
    };
    const handleAge = (e) => {
        setAge(e.target.value);
        setError("");
    };
    const handleScholar = (e) => {
        setScholar(e.target.value);
        setError("");
    };

    const handleCourse = (e) => {
        setCourse(e.target.value);
        setWhy("NOTEMPTY");
        setCompl("NOTEMPTY");
        setError("");
    };

    const handleInstitution = (e) => {
        setInstitution(e.target.value);
        setWhy("NOTEMPTY");
        setCompl("NOTEMPTY"); //Para que não haja uma interferência no feedback dado no final atribuo valores vazios aos estados não utilizados
        setError("");
    };
    const handleBecause = (e) => {
        setWhy(e.target.value);
        setCourse("NOTEMPTY");
        setInstitution("NOTEMPTY");
        setError("");
    };
    const handleComplement = (e) => {
        setCompl(e.target.value);
        setCourse("NOTEMPTY");
        setInstitution("NOTEMPTY"); //Para que não haja uma interferência no feedback dado no final atribuo valores vazios aos estados não utilizados
        setError("");
    };

    const setPageValue = () => {
        switch (scholar) {
            case "Ensino Médio Completo":
                return 3;
            case "Ensino Fundamental":
                return 3;
            case "Ensino Superior":
                return 2;
            default:
                console.log("err");
                break;
        }
    };

    const handleLastPage = (e) => {
        e.preventDefault();
        if (
            course === " " ||
            institutions === "" ||
            motivation === "" ||
            complements === ""
        ) {
            alert("Não deixe campos vazios");
            setError("Preencha todos os campos");
        } else {
            setPage(4);
        }
    };

    const handleNewPage = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || age === "") {
            setError("Preencha todos os campos");
            alert("Não deixe nenhum campo vazio");
        } else {
            setPage(setPageValue());
        }
    };

    const renderPage = () => {
        switch (page) {
            case 1:
                return etapa1;
            case 2:
                return ensinosuperior;
            case 3:
                return ensinomedio;
            case 4:
                return final;
            default:
                console.log("");
        }
    };

    const etapa1 = (
        <Container>
            <form>
                <label htmlFor="">1. Qual o seu nome?</label>
                <Display>{name}</Display>
                <Error>{error}</Error>

                <input onChange={handleName} type="text" required />
                <label htmlFor="">2. Qual sua idade?</label>
                <Display>{age}</Display>
                <Error>{error}</Error>
                <input onChange={handleAge} type="number" required />
                <label htmlFor="">3. Qual seu email?</label>
                <Display>{email}</Display>
                <Error>{error}</Error>
                <input onChange={handleEmail} type="email" required />
                <label htmlFor="">4. Qual a sua escolaridade?</label>
                <select onMouseLeave={handleScholar} name="" id="">
                    <option
                        onMouseLeave={handleScholar}
                        value="Ensino Médio Completo"
                    >
                        Ensino Médio Completo
                    </option>
                    <option
                        onMouseLeave={handleScholar}
                        value="Ensino Fundamental"
                    >
                        Ensino Fundamental
                    </option>
                    <option
                        onMouseLeave={handleScholar}
                        value="Ensino Superior"
                    >
                        Ensino Superior
                    </option>
                    <option
                        onMouseLeave={handleScholar}
                        value="Ensino Superior"
                    >
                        Ensino Superior Incompleto
                    </option>
                </select>
                <button onClick={handleNewPage} type="submit">
                    Próxima Etapa
                </button>
            </form>
        </Container>
    );

    const ensinosuperior = (
        <Container>
            <form>
                <label htmlFor="">5. Qual o Curso?</label>
                <Display>{course}</Display>
                <Error>{error}</Error>
                <input onChange={handleCourse} type="text" value={course} />
                <label htmlFor="">6. Qual a instituição de ensino?</label>
                <Display>{institutions}</Display>
                <Error>{error}</Error>
                <input
                    onChange={handleInstitution}
                    type="text"
                    value={institutions}
                />
                <button onClick={handleLastPage} type="submit">
                    Próxima Etapa
                </button>
            </form>
        </Container>
    );

    const ensinomedio = (
        <Container>
            <form>
                <label htmlFor="">
                    5. Por que você não terminou um curso de graduação?
                </label>
                <Display>{motivation}</Display>
                <Error>{error}</Error>
                <input
                    onChange={handleBecause}
                    value={motivation}
                    type="text"
                />
                <label htmlFor="">6. Você fez algum curso complementar?</label>
                <Display>{complements}</Display>
                <Error>{error}</Error>
                <input
                    onChange={handleComplement}
                    value={complements}
                    type="text"
                />
                <button onClick={handleLastPage} type="submit">
                    Próxima Etapa
                </button>
            </form>
        </Container>
    );

    const check = () => {
        if (scholar === "Ensino Superior") {
            return (
                <>
                    <li>Curso Superior: {course}</li>
                    <li>Instituição de Ensino Superior: {institutions}</li>
                </>
            );
        } else {
            return (
                <>
                    <li>
                        Motivação para não concluir o ensino médio: {motivation}
                    </li>
                    <li>Cursos Complementares: {complements}</li>
                </>
            );
        }
    };

    const final = (
        <Final>
            <div>
                <h1>
                    {name}, <br /> obrigado por responder nosso formulário!
                </h1>
                <ul>
                    <p>Os seus dados:</p>
                    <li>Nome: {name}</li>
                    <li>E-mail: {email}</li>
                    <li>Idade: {age}</li>
                    {check()}
                </ul>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    Finalizar cadastro
                </a>
            </div>
        </Final>
    );

    return <>{renderPage()}</>;
}
