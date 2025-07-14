# 🧠 Show do Milhão - Versão Node.js

## 📍 Desenvolvido por:
**Emilha de Souza**


---

## 📝 Descrição do Projeto

Este projeto é uma simulação do famoso **Show do Milhão**, desenvolvido em **JavaScript** e executado totalmente pelo terminal usando **Node.js**. O objetivo é praticar lógica de programação e manipulação de entrada e saída com `readline`, funções, controle de fluxo e listas.


---

## 🎮 Regras do Jogo

- O jogo possui 10 rodadas, com perguntas separadas em **três níveis de dificuldade**:
  - Rodadas 1 a 4 → Perguntas fáceis  
  - Rodadas 5 a 7 → Perguntas médias  
  - Rodadas 8 a 10 → Perguntas difíceis
- Cada pergunta possui 4 alternativas (A, B, C ou D).
- O jogador pode escolher **parar o jogo a qualquer momento** digitando `P`.
- Em caso de erro, o jogo termina e o jogador perde a premiação.
- Se acertar todas as perguntas, o jogador leva o prêmio máximo!


---

## 🕹️ Como Jogar

1. Certifique-se de ter o **Node.js** instalado em sua máquina.
2. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/show-do-milhao.git
   ```
3. Acesse a pasta do projeto:
   ```bash
   cd show-do-milhao
   ```
4. Execute o comando:
   ```bash
   npm start
   ```

Durante o jogo:
- Responda com `A`, `B`, `C` ou `D` para escolher a alternativa correta.
- Digite `P` para **parar e ficar com o prêmio atual**.
- Após o fim do jogo, você poderá escolher se deseja jogar novamente.


---

## 💰 Premiação

| Rodada | Prêmio (R$)     |
|--------|------------------|
| 1      | 1.000,00         |
| 2      | 2.000,00         |
| 3      | 3.000,00         |
| 4      | 5.000,00         |
| 5      | 10.000,00        |
| 6      | 20.000,00        |
| 7      | 30.000,00        |
| 8      | 50.000,00        |
| 9      | 75.000,00        |
| 10     | 100.000,00       |


---

## ⚙️ Como Executar

Com o projeto já clonado, basta executar no terminal:

```bash
npm start
```

Ou, se preferir:

```bash
node index.js
```


---

## 📌 Estrutura do Projeto

```bash
📁 show-do-milhao
├── .gitignore
├── package.json
└── index.js  <-- Código principal do jogo
```

> Obs: todo o jogo está contido em um único arquivo `.js` conforme exigido.


---

## 📚 Créditos e Fontes de Referência

- [Documentação oficial do Node.js](https://nodejs.org/en/)
- Perguntas baseadas em conhecimentos gerais e cultura brasileira


---

## ⚖️ Licença

Este projeto está licenciado sob a **MIT License** – veja o arquivo [LICENSE](LICENSE) para detalhes.