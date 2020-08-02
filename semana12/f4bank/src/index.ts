export const processData = {
    slot1: process.argv[2],
    slot2: process.argv[3],
    slot3: process.argv[4],
    slot4: process.argv[5],
    slot5: process.argv[6],
};

console.log(
    "\x1b[33m%s\x1b[0m:",
    "----------------------------------------------------------------------------------------- \n BEM VINDO AO F4 BANK \n -----------------------------------------------------------------------------------------"
);
console.log(
    "\x1b[33m%s\x1b[0m:",
    "Eis os comandos disponíveis nessa interface: \n\ncreate-account 'Seu nome 'Seu CPF' 'Sua Data de Nascimento'\ncheck-balance 'Seu CPF' \ndeposit  'Seu CPF' 'Quantidade' \npay-bill 'Seu CPF' 'Valor' 'Descrição' \ntransfer 'Seu CPF' 'Valor' 'Descrição' 'CPF de destino'\nsee-transactions 'Seu CPF'"
);
console.log(
    "\x1b[33m%s\x1b[0m:",
    "\n Insira uma string vazia caso não deseje informar um parâmetro opcional\n Você deve ser maior de idade para criar uma conta no F4 BANK"
);

console.log(
    "\x1b[33m%s\x1b[0m:",
    "----------------------------------------------------------------------------------------- "
);
