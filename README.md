<h1 align="center">App - Cálculo do salário líquido</h1>

<p align="center">
  <img src="https://img.shields.io/badge/status-concluído-brightgreen.svg" alt="Status" />
</p>

</h4>
Projeto desenvolvido como parte do 2° ano no curso de Desenvolvimento de Sistemas ministrado na Escola Técnica Estadual de Itaquaquecetuba. 
</h4>

## Descrição
<p align=>Este projeto consiste em uma página web que fornece informações sobre o salário líquido de uma pessoa após os devidos descontos. Assim, a página possui um formulário onde o usuário pode inserir informações relacionadas ao salário bruto, horas extras trabalhadas, desconto por faltas e a porcentagem de desconto no imposto de renda. Ao clicar no botão "calcular", os valores são processados pela função SalLiq do arquivo TypeScript. O cálculo é feito da seguinte maneira:

* O valor do salário bruto (sb) e o valor das horas extras (vl) são somados para obter o valor total dos proventos (Provento);

* O desconto por faltas (df) e a porcentagem de desconto no imposto de renda (dc) são usados para calcular o valor total do desconto (Desconto). O desconto do imposto de renda é calculado como uma porcentagem do salário bruto;

* O resultado do salário líquido é calculado subtraindo o valor total do desconto (Desconto) dos proventos (Provento), e esse valor é exibido na interface do usuário.

</p>

## Projeto

## Como executar o código (no Windows):

<h3><b>1. Instalação do IONIC</b></h3>

* Instale o software Node.js (64 ou 32 bits, conforme a versão do computador);
* Para verificar se tudo ocorreu bem, acesse o prompt de comando (cmd), digite "node -v" e veja se a versão instalada aparecerá;
* No prompt de comando, digite a instrução: "npm install -g ionic cordova" e, após a instalação, "ionic -v" e "cordova -v" para saber se a instalação foi bem sucedida.

<h3><b>2. Criação de um app</b></h3>

* Acesse os caminhos para os diretórios "Disco Local (C:)> Usuários > [Seu usuário] > AppData > Roaming > npm" por meio do comando "cd [nome do diretório]" no prompt de comando;
* Digite a instrução "ionic start APP1 blank", onde 'APP1' é o nome dado para a aplicação e 'blank' é um template que traz toda a estrutura do aplicativo;
* Ao ser solicitado o uso de um framework, selecione "Angular";
* Indique "N" para integração nativa com IOS ou Android e para criar uma conta (caso seja solicitado);
* Após o download do template, verifique o diretório criado através do "dir" e acesse-o;
* Ao entrar em "APP1', execute o aplicativo pela instrução: "ionic serve", que abrirá o navegador com a aplicação rodando;
* Instale o editor de código-fonte "Visual Studio Code" e acesse a pasta "APP1".

<h6>os arquivos:<p>
  
home.page.html: descreve as instruções HTML visualizadas na página, <p>
home.page.ts: possui as instruções de JavaScript,<p>
home.page.scss: possui as instruções CSS.
</h6>

### Ferramentas

- [Node.js](https://nodejs.org/pt-br/download);
- [VSCode](https://www.apachefriends.org/pt_br/index.html).
