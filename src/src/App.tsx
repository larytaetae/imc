import React, { useState } from 'react'
import { Box, Card, Typography, TextField, Button } from '@mui/material'

export default function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [imc, setImc] = useState('')
  const [classificacao, setClassificacao] = useState('')

  const calcularIMC = () => {
    const pesoFormatado = parseFloat(peso.replace(',', '.'))
    const alturaFormatada = parseFloat(altura.replace(',', '.'))

    if (!pesoFormatado || !alturaFormatada) {
      setImc('')
      setClassificacao('')
      return
    }

    const valorIMC = pesoFormatado / (alturaFormatada * alturaFormatada)
    setImc(valorIMC.toFixed(1))

    let classificacaoTexto = ''
    if (valorIMC < 18.5) classificacaoTexto = 'Abaixo do peso'
    else if (valorIMC < 25) classificacaoTexto = 'Peso normal'
    else if (valorIMC < 30) classificacaoTexto = 'Sobrepeso'
    else classificacaoTexto = 'Obesidade'

    setClassificacao(classificacaoTexto)
  }

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f0fdfb"
    >
      <Card
        sx={{
          width: '90%',
          maxWidth: 400,
          p: 4,
          borderRadius: 3,
          bgcolor: '#e0f7f1',
        }}
      >
        <Typography variant="h5" align="center" color="#009e88" mb={2}>
          📟 Simulador de IMC
        </Typography>

        <TextField
          label="Peso (kg)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <TextField
          label="Altura (m)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: '#20c997',
            '&:hover': { backgroundColor: '#1aa179' },
          }}
          onClick={calcularIMC}
        >
          Calcular IMC
        </Button>

        {imc && (
          <Box mt={3}>
            <Typography variant="body1">
              ✅ Seu IMC é <strong>{imc}</strong>
            </Typography>
            <Typography variant="body2">
              📊 Classificação: <strong>{classificacao}</strong>
            </Typography>
          </Box>
        )}
      </Card>
    </Box>
  )
}
