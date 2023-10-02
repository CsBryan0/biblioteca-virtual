"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registrarLivros_1 = __importDefault(require("./routes/registrarLivros"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Servidor está rodando! pourra');
});
app.use('/api', registrarLivros_1.default);
app.listen(PORT, () => {
    console.log(`Servidor está ouvindo na porta ${PORT}`);
});
