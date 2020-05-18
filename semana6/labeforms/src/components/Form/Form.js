import React, { useState, useEffect } from "react";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [scholar, setScholar] = useState("");
    const [age, setAge] = useState("");
    const [page, setPage] = useState("1");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleAge = (e) => {
        setAge(e.target.value);
    };
    const handleScholar = (e) => {
        setScholar(e.target.value);
    };

    const setNextPage = () => {
        if (page === 1 && scholar == "medio") {
            return 
        }
    };
    const handlePage = (e) => {
        e.preventDefault();

        setPage("1");
    };



    const renderPage = () => {
        switch (page) {
            case 1:
                return etapa1;
            case 2: 
                return ensinosuperior
                
                
        }
    }






    const etapa1 = (
        <form>
            <label htmlFor="">1. Qual o seu nome?</label>
            <input onChange={handleName} type="text" required />
            <label htmlFor="">2. Qual sua idade?</label>
            <input onChange={handleAge} type="text" required />
            <label htmlFor="">3. Qual seu email?</label>
            <input onChange={handleEmail} type="text" required />
            <label htmlFor="">4. Qual a sua escolaridade?</label>
            <select onChange={handleScholar} name="" id="">
                <option value="medio">Ensino Médio Completo</option>
                <option value="fundamental">Ensino Fundamental</option>
                <option value="Superior">Ensino Superior</option>
                <option value="SuperiorIncompleto">
                    Ensino Superior Incompleto
                </option>
            </select>
            <button onClick={handlePage} type="submit">
                Próxima Etapa
            </button>
        </form>
    );

    const ensinosuperior = (
        <form>
            <label htmlFor="">5. Qual o Curso?</label>
            <input type="text" />
            <label htmlFor="">6. Qual a instituição de ensino?</label>
            <input type="text" />
            <button onClick={handlePage} type="submit">
                Próxima Etapa
            </button>
        </form>
    );

    const ensinomedio = (
        <form>
            <label htmlFor="">
                5. Por que você não terminou um curso de graduação?{" "}
            </label>
            <input type="text" />
            <label htmlFor="">6. Você fez algum curso complementar?</label>
            <input type="text" />
            <button onClick={handlePage} type="submit">
                Próxima Etapa
            </button>
        </form>
    );

    const final = <h1>Obrigado, {name} , por responder nosso formulário!</h1>;

    return <>{etapa1}</>;
}
