Feature: Automação Desafio Qualidade
    Devo verificar se os campos estão preenchidos
    Devo efetuar cadastro completo
    Devo interagir com varios elementos

    Background: Carregando o basico
    Given que estou no site

    Scenario: falta o nome
        When efetuo o cadastro em branco
        Then vejo a mensagem Nome eh obrigatorio

    Scenario: falta o sobrenome
        When efetuo o cadastrado somente com nome
        Then vejo a mensagem Sobrenome eh obrigatorio

    Scenario: falta o genero
        When efetuo o cadastro ate sobrenome
        Then vejo a mensagem Sexo eh obrigatorio

    Scenario: perguntando sobre comida favorita
        When efetuo o cadastro ate genero
        And selecionando carne e vegetariano
        Then vejo a mensagem Tem certeza que voce eh vegetariano?    

    Scenario: perguntando sobre esportes
        When efetuo o cadastro ate comida favorita
        And selecionando futebol e o que eh esporte
        Then vejo a mensagem Voce faz esporte ou nao?   

    Scenario: interacao com a resposta voltou
        When interajo com o link voltar
        Then vejo a mensagem Voltou!

    Scenario: interacao com os campos de nome doutorado com xpath
        When interajo com os campos da direita para esquerda
        Then vejo a mensagem Doutorado


        