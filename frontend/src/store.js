// src/store.js
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    question1Answer: 'Selecione uma opção',
    question2Answer: 'Selecione uma opção',
    question3Answer: 'Selecione uma opção',
    question4Answer: '',
    question5Answer: 'Selecione uma opção',
    question6Answer: 'Selecione uma opção',
    question7Answer: 'Selecione uma opção',
    question8Answer: 'C1',
    cycle: 'c1',
    viewColetarDados: true,
    viewAnalisarValidar: true,
    viewVerificarViabilidade: true,
    viewImplantarRedesenhar: true,
    projects: [],
    activeProject: null,
    activeUser: null
  },
  mutations: {
    setActiveUser(state, user) {
      state.activeUser = user
    },
    setActiveProject(state, project) {
      state.activeProject = project;
    },
    addProject(state, project) {
      state.projects.push(project);
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setQuestion1Answer(state, answer) {
      state.question1Answer = answer;
    },
    setQuestion2Answer(state, answer) {
      state.question2Answer = answer;
    },
    setQuestion3Answer(state, answer) {
      state.question3Answer = answer;
    },
    setQuestion4Answer(state, answer) {
      state.question4Answer = answer;
    },
    setQuestion5Answer(state, answer) {
      state.question5Answer = answer;
    },
    setQuestion6Answer(state, answer) {
      state.question6Answer = answer;
    },
    setQuestion7Answer(state, answer) {
      state.question7Answer = answer;
    },
    setQuestion8Answer(state, answer) {
      state.question8Answer = answer;
    },
    setCycle(state, cycle) {
      state.cycle = cycle;
    },
    setViewColetarDados(state, status) {
      state.viewColetarDados = status
    },
    setViewAnalisarValidar(state, status) {
      state.viewAnalisarValidar = status
    },
    setViewVerificarViabilidade(state, status) {
      state.viewVerificarViabilidade = status
    },
    setViewImplantarRedesenhar(state, status) {
      state.viewImplantarRedesenhar = status
    },
    resetAnswers(state) {
      state.question1Answer = 'Selecione uma opção';
      state.question2Answer = 'Selecione uma opção';
      state.question3Answer = 'Selecione uma opção';
      state.question4Answer = '';
      state.question5Answer = 'Selecione uma opção';
      state.question6Answer = 'Selecione uma opção';
      state.question7Answer = 'Selecione uma opção';
      state.question8Answer = 'C1';
      state.cycle = '';
      state.viewColetarDados = true;
      state.viewAnalisarValidar = true;
      state.viewVerificarViabilidade = true;
      state.viewImplantarRedesenhar = true;
    },
  },
  actions: {
    updateActiveUser({ commit }, user) {
      commit('setActiveUser', user)
    },
    updateActiveProject({ commit }, project) {
      commit('setActiveProject', project)
      return Promise.resolve()
    },
    addProject({ commit }, project) {
      commit('addProject', project)
      return Promise.resolve()
    },
    setProjects({ commit }, projects) {
      commit('setProjects', projects)
      return Promise.resolve()
    },
    updateQuestion1Answer({ commit }, answer) {
      commit('setQuestion1Answer', answer);
    },
    updateQuestion2Answer({ commit }, answer) {
      commit('setQuestion2Answer', answer);
    },
    updateQuestion3Answer({ commit }, answer) {
      commit('setQuestion3Answer', answer);
    },
    updateQuestion4Answer({ commit }, answer) {
      commit('setQuestion4Answer', answer);
    },
    updateQuestion5Answer({ commit }, answer) {
      commit('setQuestion5Answer', answer);
    },
    updateQuestion6Answer({ commit }, answer) {
      commit('setQuestion6Answer', answer);
    },
    updateQuestion7Answer({ commit }, answer) {
      commit('setQuestion7Answer', answer);
    },
    updateQuestion8Answer({ commit }, answer) {
      commit('setQuestion8Answer', answer);
    },
    updateCycle({ commit }, cycle) {
      commit('setCycle', cycle);
    },
    updateViewColetarDados({ commit }, status) {
      commit('setViewColetarDados', status);
    },
    updateViewAnalisarValidar({ commit }, status) {
      commit('setViewAnalisarValidar', status);
    },
    updateViewVerificarViabilidade({ commit }, status) {
      commit('setViewVerificarViabilidade', status);
    },
    updateViewImplantarRedesenhar({ commit }, status) {
      commit('setViewImplantarRedesenhar', status);
    },
    resetAnswers({ commit }) {
      commit('resetAnswers');
    },
  },
  plugins: [
    createPersistedState({
      key: 'my-projects', // Nome da chave no localStorage
      paths: ['activeProject'], // Apenas persistir o activeProject
    }),
  ],
});

