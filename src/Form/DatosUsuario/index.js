import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { ValidarEmail, ValidarPassword } from "./validaciones";

const DatosUsuario = () => {

  const [email, setEmail] = useState({ value: "Omar@gg.com" || '', valid: true })
  const [password, setPassword] = useState({ value: "abc" || '', valid: true })

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(email, password);
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={false}
        helperText={false && "Ingresa un correo electrónico válido"}
        value={email.value}
        onChange={(input) => {
            const email = input.target.value;
            const valido = ValidarEmail(email);
            setEmail({ value: email, valid: valido });
          }
        }
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        value={password.value}
        onChange={(input) => {
            const password = input.target.value;            
            setPassword({ password: { value: password, valid: ValidarPassword(password) } })
          }
        }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
}

export default DatosUsuario;
