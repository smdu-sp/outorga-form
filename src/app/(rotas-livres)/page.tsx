'use client'

import Content from '@/components/Content';
import { Box, Card, TabList, Tabs } from '@mui/joy';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { useEffect, useState } from 'react';

export default function Home() {
  const [tabValue, setTabValue] = useState(0);

  const values: string[] = [
    'processo',
    'coordenadas',
    'enderecos',
    'zona_uso',
    'area',
    'alvara',
    'certificado_conclusao',
    'observacoes'
  ];

  function verificaId() {
    const scrollContainer = document.querySelector('div[role="tabpanel"]');
    if (scrollContainer) {
      const containerRect = scrollContainer.getBoundingClientRect();
      const cards = Array.from(scrollContainer.querySelectorAll('div[id]'));
      const newVisibleIds = cards
        .filter(card => {
          const cardRect = card.getBoundingClientRect();
          return (
            cardRect.top < containerRect.bottom &&
            cardRect.bottom > containerRect.top
          );
        })
        .map(card => card.id);
      const newTabValue = values.indexOf(newVisibleIds[0]);
      if (newTabValue !== tabValue) {
        setTabValue(newTabValue);
      }
    }
  }

  useEffect(() => {
    verificaId();
    window.addEventListener('scroll', verificaId);
    return () => {
      window.removeEventListener('scroll', verificaId);
    };
  }, [tabValue]);

  return (
    <Content
      titulo='Página Inicial'
      pagina='/'
    >
      <Tabs
        aria-label="Vertical tabs"
        orientation="vertical"
        sx={{ borderRadius: 4, bgcolor: 'transparent', height: '100%', display: 'flex', alignItems: 'center' }}
        value={tabValue}
      >

        <Box
          sx={{ width: '100%', pr: 2, height: '78vh', overflow: 'auto', scrollbarColor: 'primary', '&::-webkit-scrollbar': { display: 'none' } }}
          role="tabpanel"
          onScroll={verificaId}
        >
          <Card sx={{ height: '78vh', width: '100%', my: 1 }} id="processo">
            Processo
          </Card>
          <Card sx={{ height: '78vh', width: '100%', my: 1 }} id="coordenadas">
            Coordenadas
          </Card>
          <Card sx={{ height: '78vh', width: '100%', my: 1 }} id="enderecos">
            Endereços
          </Card>
          <Card sx={{ height: '78vh', width: '100%', my: 1 }} id="zona_uso">
            Zona e Uso
          </Card>
          <Card sx={{ height: '78vh', width: '100%', my: 1 }} id="area">
            Área
          </Card>
          <Card sx={{ height: '78vh', width: '100%', my: 1 }} id="alvara">
            Alvará
          </Card>
          <Card sx={{ height: '78vh', width: '100%', my: 1 }} id="certificado_conclusao">
            Certificado de Conclusão
          </Card>
          <Card sx={{ height: '78vh', width: '100%', my: 1 }} id="observacoes">
            Observações
          </Card>
        </Box>
        <TabList disableUnderline sx={{
          height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: 0.5,
          width: 270,
          gap: 0.5,
          borderRadius: 'xl',
          bgcolor: 'transparent',
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: 'sm',
            bgcolor: 'background.level1',
          },
        }}
        >
          <Tab disableIndicator component='a' href='#processo'>Processo</Tab>
          <Tab disableIndicator component='a' href='#coordenadas'>Coordenadas</Tab>
          <Tab disableIndicator component='a' href='#enderecos'>Endereços</Tab>
          <Tab disableIndicator component='a' href='#zona_uso'>Zona e Uso</Tab>
          <Tab disableIndicator component='a' href='#area'>Área</Tab>
          <Tab disableIndicator component='a' href='#alvara'>Alvará</Tab>
          <Tab disableIndicator component='a' href='#certificado_conclusao'>Certificado de Conclusão</Tab>
          <Tab disableIndicator component='a' href='#observacoes'>Observações</Tab>
        </TabList>
      </Tabs>
    </Content>
  );
}
