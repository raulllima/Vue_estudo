import { createRouter, createWebHistory } from 'vue-router'
import Inicio from './views/Inicio.vue'
import Projetos from './views/Projetos.vue'
import DefinirFluxoEtapa1 from './views/DefinirFluxoEtapa1.vue'
import DefinirFluxoEtapa2 from './views/DefinirFluxoEtapa2.vue'
import Premissas from './views/Premissas.vue'

// Ciclo 1
import Ciclo1ColetaDados from '@/views/Ciclo1/ColetarDados.vue'
import Ciclo1AnalisarValidar from '@/views/Ciclo1/AnalisarValidar.vue'
import Ciclo1VerificarViabilidade from '@/views/Ciclo1/VerificarViabilidade.vue'
import Ciclo1Resultado from '@/views/Ciclo1/Resultado.vue'
import Ciclo1Itens from '@/views/Ciclo1/Itens.vue'
import Ciclo1Investimentos from '@/views/Ciclo1/Investimento.vue'

// Ciclo 2
import Ciclo2ColetaDados from '@/views/Ciclo2/ColetarDados.vue'
import Ciclo2AnalisarValidar from '@/views/Ciclo2/AnalisarValidar.vue'
import Ciclo2VerificarViabilidade from '@/views/Ciclo2/VerificarViabilidade.vue'
import Ciclo2Itens from '@/views/Ciclo2/Itens.vue'
import Ciclo2Investimentos from '@/views/Ciclo2/Investimento.vue'
import Ciclo2Resultado from '@/views/Ciclo2/Resultado.vue'

// Ciclo 3
import Ciclo3ColetaDados from '@/views/Ciclo3/ColetarDados.vue'
import Ciclo3AnalisarValidar from '@/views/Ciclo3/AnalisarValidar.vue'
import Ciclo3VerificarViabilidade from '@/views/Ciclo3/VerificarViabilidade.vue'
import Ciclo3Itens from '@/views/Ciclo3/Itens.vue'
import Ciclo3Investimentos from '@/views/Ciclo3/Investimento.vue'
import Ciclo3Resultado from '@/views/Ciclo3/Resultado.vue'

// Ciclo 4
import Ciclo4ColetaDados from '@/views/Ciclo4/ColetarDados.vue'
import Ciclo4AnalisarValidar from '@/views/Ciclo4/AnalisarValidar.vue'
import Ciclo4VerificarViabilidade from '@/views/Ciclo4/VerificarViabilidade.vue'
import Ciclo4Itens from '@/views/Ciclo4/Itens.vue'
import Ciclo4Investimentos from '@/views/Ciclo4/Investimento.vue'
import Ciclo4Resultado from '@/views/Ciclo4/Resultado.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
    meta: { title: "Inicio" }
  },
  {
    path: '/meus_projetos',
    name: 'meus_projetos',
    component: Projetos,
    meta: { title: "Inicio - Projetos" }
  },
  {
    path: '/premissas',
    name: 'Premissas',
    component: Premissas,
    meta: { title: "Premissas" }
  },
  {
    path: '/definir',
    name: 'Definir Fluxo - Etapa 1',
    component: DefinirFluxoEtapa1,
    meta: { title: "Definir Fluxo - Etapa 1" }
  },
  {
    path: '/definir_etapa2',
    name: 'Definir Fluxo - Etapa 2',
    component: DefinirFluxoEtapa2,
    meta: { title: "Definir Fluxo - Etapa 2" }
  },

  // Ciclo1
  // Coletar Dados
  {
    path: '/c1-coletarDados',
    name: "C1-ColetarDados",
    component: Ciclo1ColetaDados,
    meta: { title: "Ciclo 1 - Coletar Dados", shouldFetch: true }
  },
  // Itens
  {
    path: '/c1-itens',
    name: 'C1-Itens',
    component: Ciclo1Itens,
    meta: { title: "Ciclo 1 - Itens", shouldFetch: true }
  },
  // Analisar e Validar
  {
    path: '/c1-analisarValidar',
    name: 'C1-AnalisarValidar',
    component: Ciclo1AnalisarValidar,
    meta: { title: "Ciclo 1 - Analisar e Validar", shouldFetch: true }
  },
  // Verificar Viabilidade
  {
    path: '/c1-verificarViabilidade',
    name: 'C1-VerificarViabilidade',
    component: Ciclo1VerificarViabilidade,
    meta: { title: "Ciclo 1 - Verificar Viabilidade", shouldFetch: true }
  },
  // Investimentos
  {
    path: '/c1-investimentos',
    name: 'C1-Investimentos',
    component: Ciclo1Investimentos,
    meta: { title: "Ciclo 1 - Investimentos e Custos", shouldFetch: true }
  },
  // Resultado
  {
    path: '/c1-implantarRedesenhar',
    name: 'C1-Resultado',
    component: Ciclo1Resultado,
    meta: { title: "Ciclo 1 - Resultado", shouldFetch: true }
  },

 
  // Ciclo 2
  // Coletar Dados
  {
    path: '/c2-coletarDados',
    name: "C2-ColetarDados",
    component: Ciclo2ColetaDados,
    meta: { title: "Ciclo 2 - Coletar Dados", shouldFetch: true }
  },
  // Itens
  {
    path: '/c2-itens',
    name: 'C2-Itens',
    component: Ciclo2Itens,
    meta: { title: "Ciclo 2 - Itens", shouldFetch: true }
  },
  // Analisar e Validar
  {
    path: '/c2-analisarValidar',
    name: 'C2-AnalisarValidar',
    component: Ciclo2AnalisarValidar,
    meta: { title: "Ciclo 2 - Analisar e Validar", shouldFetch: true }
  },
  // Verificar Viabilidade
  {
    path: '/c2-verificarViabilidade',
    name: 'C2-VerificarViabilidade',
    component: Ciclo2VerificarViabilidade,
    meta: { title: "Ciclo 2 - Verificar Viabilidade", shouldFetch: true }
  },
  // Investimentos
  {
    path: '/c2-investimentos',
    name: 'C2-Investimentos',
    component: Ciclo2Investimentos,
    meta: { title: "Ciclo 2 - Investimentos e Custos", shouldFetch: true }
  },
  // Resultado
  {
    path: '/c2-implantarRedesenhar',
    name: 'C2-Resultado',
    component: Ciclo2Resultado,
    meta: { title: "Ciclo 2 - Resultado", shouldFetch: true }
  },

  // Ciclo 3
  // Coletar Dados
  {
    path: '/c3-coletarDados',
    name: "C3-ColetarDados",
    component: Ciclo3ColetaDados,
    meta: { title: "Ciclo 3 - Coletar Dados", shouldFetch: true }
  },
  // Itens
  {
    path: '/c3-itens',
    name: 'C3-Itens',
    component: Ciclo3Itens,
    meta: { title: "Ciclo 3 - Itens", shouldFetch: true }
  },
  // Analisar e Validar
  {
    path: '/c3-analisarValidar',
    name: 'C3-AnalisarValidar',
    component: Ciclo3AnalisarValidar,
    meta: { title: "Ciclo 3 - Analisar e Validar", shouldFetch: true }
  },
  // Verificar Viabilidade
  {
    path: '/c3-verificarViabilidade',
    name: 'C3-VerificarViabilidade',
    component: Ciclo3VerificarViabilidade,
    meta: { title: "Ciclo 3 - Verificar Viabilidade", shouldFetch: true }
  },
  // Investimentos
  {
    path: '/c3-investimentos',
    name: 'C3-Investimentos',
    component: Ciclo3Investimentos,
    meta: { title: "Ciclo 3 - Investimentos e Custos", shouldFetch: true }
  },
  // Resultado
  {
    path: '/c3-implantarRedesenhar',
    name: 'C3-Resultado',
    component: Ciclo3Resultado,
    meta: { title: "Ciclo 3 - Resultado", shouldFetch: true }
  },

  // Ciclo 4
  // Coletar Dados
  {
    path: '/c4-coletarDados',
    name: "C4-ColetarDados",
    component: Ciclo4ColetaDados,
    meta: { title: "Ciclo 4 - Coletar Dados", shouldFetch: true }
  },
  // Itens
  {
    path: '/c4-itens',
    name: 'C4-Itens',
    component: Ciclo4Itens,
    meta: { title: "Ciclo 4 - Itens", shouldFetch: true }
  },
  // Analisar e Validar
  {
    path: '/c4-analisarValidar',
    name: 'C4-AnalisarValidar',
    component: Ciclo4AnalisarValidar,
    meta: { title: "Ciclo 4 - Analisar e Validar", shouldFetch: true }
  },
  // Verificar Viabilidade
  {
    path: '/c4-verificarViabilidade',
    name: 'C4-VerificarViabilidade',
    component: Ciclo4VerificarViabilidade,
    meta: { title: "Ciclo 4 - Verificar Viabilidade", shouldFetch: true }
  },
  // Investimentos
  {
    path: '/c4-investimentos',
    name: 'C4-Investimentos',
    component: Ciclo4Investimentos,
    meta: { title: "Ciclo 4 - Investimentos e Custos", shouldFetch: true }
  },
  // Resultado
  {
    path: '/c4-implantarRedesenhar',
    name: 'C4-Resultado',
    component: Ciclo4Resultado,
    meta: { title: "Ciclo 4 - Resultado", shouldFetch: true }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Inicio'

  next()
})

export default router