function createEstates(){
    let list = [
        'AC - Acre',
        'AL - Alagoas',
        'AP - Amapá',
        'AM - Amazonas',
        'BA - Bahia',
        'CE - Ceará',
        'DF - Distrito Federal',
        'ES - Espírito Santo',
        'GO - Goías',
        'MA - Maranhão',
        'MT - Mato Grosso',
        'MS - Mato Grosso do Sul',
        'MG - Minas Gerais',
        'PA - Pará',
        'PB - Paraíba',
        'PR - Paraná',
        'PE - Pernambuco',
        'PI - Piauí',
        'RJ - Rio de Janeiro',
        'RN - Rio Grande do Norte',
        'RS - Rio Grande do Sul',
        'RO - Rondônia',
        'RR - Roraíma',
        'SC - Santa Catarina',
        'SP - São Paulo',
        'SE - Sergipe',
        'TO - Tocantins'
        ];
    let select = document.querySelector('#estado')
    for (let index = 0; index < list.length; index+=1){
        let estados = document.createElement('option')
        estados.innerHTML = list[index]
        select.appendChild(estados)
    }
    }
    createEstates()
