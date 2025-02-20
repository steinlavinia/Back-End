function validaNome(nome) {
    const regexNome = /^[a-zA-Zà-ÿ\s-']=+$/;
    const isvalid = nome.length >= 2 && regexNome.test(nome);

    return isvalid;
};

function validaEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isvalid = email.length >= 2 && regexEmail.test(email);

    return isvalid;
};

function validaFone(telefone) {
    const regexFone = '' ;
    const isvalid = telefone.length >= 2 && regexFone.test(telefone);

    return isvalid;
};

export function validaUsuario(nome, email, telefone) {
    const nomeValido = validaNome(nome);
    const emailValido = validaEmail(email);
    const telefoneValido = validaFone(telefone);

    const usuarioValido = nomeValido && emailValido && telefoneValido;

    if (usuarioValido) {
        return {status: true, mensagem: ''}
    } else {
        return {status: false, mensagem: 'Nome e/ou Email inválido(s).'}
    }
};