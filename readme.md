Sempre que for criar uma pagina que tenha cabeçalho apenas copie e cole a estrutura da pagina
"pageDefault.html" e realize o desenvolvimento. A decisão de deixar uma estrutura pronta é visando
acelerar a produção fazendo com que não seja necessario cada um desenvolver o cabeçalho toda vez
que for desenvolver.

Qualquer alteração no arquivo "header.html" fara alteração do cabeçalho em todas as outras paginas.


-----
Para rodar a o site local precisa ter o LiveServer instalado no Visual Studio Code ou caso deseje via terminal
precisa ter instalado na maquina o Node, e o Serve instalado globalmente.

Para instalar o Serve globalmente utilize o seguinte comando: npm install --global serve
Caso esteja utilizando alguma distro Linux é necessário estar em modo de super usuário.

Caso a home não apareça nada é por conta que precisa adicionar no arquivo "main.js" o endereço ao qual o servidor estar rodando,
normalmente é localhost, mas caso não seja apenas verifique no navegador o endereço adicione no arquivo, na linha 2.