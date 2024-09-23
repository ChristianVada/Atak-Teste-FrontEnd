import { createContext, useState } from "react";
import apiUser from "../services/api";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const toast = useToast();

  const [token, setToken] = useState("");

  const fazerLogin = async (dataLogin) => {
    try {
      const response = await apiUser.post("/api/autenticacao/login", dataLogin);
      setToken(response.data.token);
      navigate("/encaminharEmail");
      toast({
        title: "Usuário conectado",
        position: "top-right",
        isClosable: true,
        status: "success",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Email e/ou senha estão incorretos",
        position: "top-right",
        isClosable: true,
        status: "error",
        duration: 3000,
      });
      console.warn(error);
    }
  };

  const EnviarEmailComExcel = async (dataEmail) => {
    try {
      await apiUser.post(`/api/excel/enviar-email`, dataEmail, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast({
        title: "Email enviado com sucesso",
        position: "top-right",
        isClosable: true,
        status: "success",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Ops algo deu errado, tente logar novamente",
        position: "top-right",
        isClosable: true,
        status: "error",
        duration: 3000,
      });
      console.warn(error);
    }
  };

  const CadastrarUsuario = async (dataRegister) => {
    try {
      await apiUser.post(`/api/autenticacao/registro`, dataRegister);
      navigate("/login");
      toast({
        title: "Cadastrado com sucesso",
        position: "top-right",
        isClosable: true,
        status: "success",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Email já cadastrado",
        position: "top-right",
        isClosable: true,
        status: "error",
        duration: 3000,
      });
      console.warn(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        fazerLogin,
        EnviarEmailComExcel,
        CadastrarUsuario,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
