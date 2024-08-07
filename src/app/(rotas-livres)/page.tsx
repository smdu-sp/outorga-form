'use client'

import Content from '@/components/Content';
import { Box, Card, Tab, TabList, Tabs } from '@mui/joy';

export default function Home() {
  return (
    <Content
      titulo='Página Inicial'
      pagina='/'
    >
      <Tabs
        aria-label="Vertical tabs"
        orientation="vertical"
        sx={{ borderRadius: 4, }}
      >
        <TabList>
          <Tab component='a' href='#processo'>Processo</Tab>
          <Tab component='a' href='#coordenadas'>Coordenadas</Tab>
          <Tab component='a' href='#enderecos'>Endereços</Tab>
          <Tab component='a' href='#zona_uso'>Zona e Uso</Tab>
          <Tab component='a' href='#area'>Área</Tab>
          <Tab component='a' href='#alvara'>Alvará</Tab>
          <Tab component='a' href='#certificado_conclusao'>Certificado de Conclusão</Tab>
          <Tab component='a' href='#observacoes'>Observações</Tab>
        </TabList>
        <Box sx={{ flex: 1, flexDirection: 'row' }}>
          <Card sx={{ height: 500, width: '100%' }} id="processo">
            Processo
          </Card>
          <Card sx={{ height: 500, width: '100%' }} id="coordenadas">
            Coordenadas
          </Card>
          <Card sx={{ height: 500, width: '100%' }} id="enderecos">
            Endereços
          </Card>
          <Card sx={{ height: 500, width: '100%' }} id="zona_uso">
            Zona e Uso
          </Card>
          <Card sx={{ height: 500, width: '100%' }} id="area">
            Área
          </Card>
          <Card sx={{ height: 500, width: '100%' }} id="alvara">
            Alvará
          </Card>
          <Card sx={{ height: 500, width: '100%' }} id="certificado_conclusao">
            Certificado de Conclusão
          </Card>
          <Card sx={{ height: 500, width: '100%' }} id="observacoes">
            Observações
          </Card>
        </Box>
      </Tabs>
    </Content>
  );
}