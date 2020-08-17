const validateEmail = (email: string) => {
      if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i))
            throw 'Email inválido';
};

export default validateEmail;
