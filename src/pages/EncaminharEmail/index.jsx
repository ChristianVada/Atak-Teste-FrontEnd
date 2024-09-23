import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

const EncaminharEmail = () => {
  const { EnviarEmailComExcel } = useContext(UserContext);

  const [quantidade, setQuantidade] = useState("");
  const [destinatario, setDestinatario] = useState("sergio.junior@atak.com.br");
  const [assunto, setAssunto] = useState("Atak Teste - Dados Gerados");
  const [corpoEmail, setCorpoEmail] = useState(
    "Este é um projeto de geração de dados fictícios. Confira o código no repositório: <https://github.com/ChristianVada/Atak-Teste-BackEnd>, <https://github.com/ChristianVada/Atak-Teste-FrontEnd>"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const quantidadeConvertInt = Number(quantidade);
    const dataEmail = {
      Quantidade: quantidadeConvertInt,
      Destinatario: destinatario,
      Assunto: assunto,
      CorpoEmail: corpoEmail,
    };
    EnviarEmailComExcel(dataEmail);
  };

  return (
    <Box maxW="sm" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="quantidade">
            <FormLabel>Quantidade de clientes fictícios a ser gerado</FormLabel>
            <Input
              type="number"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
              min={10}
              max={1000}
              placeholder="Digite a quantidade"
            />
          </FormControl>

          <FormControl id="destinatario">
            <FormLabel>Destinatário</FormLabel>
            <Input
              type="email"
              value={destinatario}
              onChange={(e) => setDestinatario(e.target.value)}
              required
              placeholder="Digite o email do destinatário"
            />
          </FormControl>

          <FormControl id="assunto">
            <FormLabel>Assunto</FormLabel>
            <Input
              type="text"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              required
              placeholder="Digite o assunto"
            />
          </FormControl>

          <FormControl id="corpoEmail">
            <FormLabel>Corpo do Email</FormLabel>
            <Textarea
              value={corpoEmail}
              onChange={(e) => setCorpoEmail(e.target.value)}
              required
              placeholder="Digite o corpo do email"
            />
          </FormControl>

          <Button type="submit" colorScheme="teal" size="lg" fontSize="md">
            Enviar Email
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default EncaminharEmail;
