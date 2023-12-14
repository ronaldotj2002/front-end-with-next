export const listarUfs = async () => {
    let estados;
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';
    await fetch(url)
        .then(response => response.json())
        .then(dados => {
            estados = dados
        });
        return estados;
}