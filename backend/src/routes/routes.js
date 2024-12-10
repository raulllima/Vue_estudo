const express = require('express')
const routes = express.Router()
const { saveToStorage, readFromStorage } = require('../functions/storage');

const save = (editFunction) => async (req, res) => {
    try {
        const activeProject = readFromStorage('activeProject');
        
        if (!activeProject) {
            return res.status(400).send({ error: 'Projeto ativo não definido' });
        }
        
        // Executa a função de edição do item específica da rota
        await editFunction(req, res);
        
        // Salva o projeto ativo
        await Application.save({ params: { project_name: activeProject } }, res);

        // Opcional: descomente para enviar uma resposta final
        // res.status(200).send({ message: 'Item editado e projeto salvo com sucesso' });
    } catch (error) {
        console.error("Erro ao editar item ou salvar projeto:", error);
        res.status(500).send({ error: "Erro ao editar item ou salvar projeto" });
    }
};

// Define Routes for 'Usuarios'
const sqlUsers = require('../modules/usuarios/usuarios.js')
routes.post('/usuarios/createUser', sqlUsers.createUser)
routes.post('/usuarios/logon', sqlUsers.getUser)

// Define Routes for 'projects'
const Application = require('../functions/projetos/index.js')
routes.post('/application/create/:project_name', Application.create)
routes.get('/application/export/:project_name', Application.export)
routes.post('/application/import/', Application.import)
routes.get('/application/load/:project_name', Application.load)
routes.put('/application/edit/:project_name', Application.edit)
routes.delete('/application/delete/:project_name', Application.delete)
routes.put('/application/save/:project_name', Application.save)
routes.put('/application/active/:project_name', Application.active)
routes.get('/projects', Application.get)

// Define Routes for 'Items Ciclo C1'
const sqlItemsC1 = require('../modules/controllers/itens/itemControllerC1')
routes.get('/itens/C1/count', sqlItemsC1.count)
routes.get('/itens/C1/getItem/:id', sqlItemsC1.getItem)
routes.get('/itens/C1/getAllItems', sqlItemsC1.getAllItems)
routes.post('/itens/C1/createItem', save(sqlItemsC1.createItem))
routes.put('/itens/C1/editItem', save(sqlItemsC1.editItem))
routes.delete('/itens/C1/deleteItem/:id', save(sqlItemsC1.deleteItem))

// Define Routes for 'Items Ciclo C2'
const sqlItemsC2 = require('../modules/controllers/itens/itemControllerC2')
routes.get('/itens/C2/count', sqlItemsC2.count)
routes.get('/itens/C2/getItem/:id', sqlItemsC2.getItem)
routes.get('/itens/C2/getAllItems', sqlItemsC2.getAllItems)
routes.post('/itens/C2/createItem', save(sqlItemsC2.createItem))
routes.put('/itens/C2/editItem', save(sqlItemsC2.editItem))
routes.delete('/itens/C2/deleteItem/:id', save(sqlItemsC2.deleteItem))

// Define Routes for 'Items Ciclo C3' 
const sqlItemsC3 = require('../modules/controllers/itens/itemControllerC3')
routes.get('/itens/C3/count', sqlItemsC3.count)
routes.get('/itens/C3/getItem/:id', sqlItemsC3.getItem)
routes.get('/itens/C3/getAllItems', sqlItemsC3.getAllItems)
routes.post('/itens/C3/createItem', save(sqlItemsC3.createItem))
routes.put('/itens/C3/editItem', save(sqlItemsC3.editItem))
routes.delete('/itens/C3/deleteItem/:id', save(sqlItemsC3.deleteItem))

// Define Routes for 'Items Ciclo C4'
const sqlItemsC4 = require('../modules/controllers/itens/itemControllerC4')
routes.get('/itens/C4/count', sqlItemsC4.count)
routes.get('/itens/C4/getItem/:id', sqlItemsC4.getItem)
routes.get('/itens/C4/getAllItems', sqlItemsC4.getAllItems)
routes.post('/itens/C4/createItem', save(sqlItemsC4.createItem))
routes.put('/itens/C4/editItem', save(sqlItemsC4.editItem))
routes.delete('/itens/C4/deleteItem/:id', save(sqlItemsC4.deleteItem))

// Define Routes for 'Custos Ciclo C1'
const sqlCustosC1 = require('../modules/controllers/custos_investimentos/custosControllerC1')
routes.get('/custos/C1/count', sqlCustosC1.count)
routes.get('/custos/C1/getItem/:id', sqlCustosC1.getItem)
routes.get('/custos/C1/getAllItems', sqlCustosC1.getAllItems)
routes.post('/custos/C1/createItem', save(sqlCustosC1.createItem))
routes.put('/custos/C1/editItem', save(sqlCustosC1.editItem))
routes.delete('/custos/C1/deleteItem/:id', save(sqlCustosC1.deleteItem))

// Define Routes for 'Custos Ciclo C2'
const sqlCustosC2 = require('../modules/controllers/custos_investimentos/custosControllerC2')
routes.get('/custos/C2/count', sqlCustosC2.count)
routes.get('/custos/C2/getItem/:id', sqlCustosC2.getItem)
routes.get('/custos/C2/getAllItems', sqlCustosC2.getAllItems)
routes.post('/custos/C2/createItem', save(sqlCustosC2.createItem))
routes.put('/custos/C2/editItem', save(sqlCustosC2.editItem))
routes.delete('/custos/C2/deleteItem/:id', save(sqlCustosC2.deleteItem))

// Define Routes for 'Custos Ciclo C3' 
const sqlCustosC3 = require('../modules/controllers/custos_investimentos/custosControllerC3')
routes.get('/custos/C3/count', sqlCustosC3.count)
routes.get('/custos/C3/getItem/:id', sqlCustosC3.getItem)
routes.get('/custos/C3/getAllItems', sqlCustosC3.getAllItems)
routes.post('/custos/C3/createItem', save(sqlCustosC3.createItem))
routes.put('/custos/C3/editItem', save(sqlCustosC3.editItem))
routes.delete('/custos/C3/deleteItem/:id', save(sqlCustosC3.deleteItem))

// Define Routes for 'Custos Ciclo C4'
const sqlCustosC4 = require('../modules/controllers/custos_investimentos/custosControllerC4')
routes.get('/custos/C4/count', sqlCustosC4.count)
routes.get('/custos/C4/getItem/:id', sqlCustosC4.getItem)
routes.get('/custos/C4/getAllItems', sqlCustosC4.getAllItems)
routes.post('/custos/C4/createItem', save(sqlCustosC4.createItem))
routes.put('/custos/C4/editItem', save(sqlCustosC4.editItem))
routes.delete('/custos/C4/deleteItem/:id', save(sqlCustosC4.deleteItem))

// Define Routes for 'Investimentos Ciclo C1'
const sqlInvestimentosC1 = require('../modules/controllers/custos_investimentos/investimentosControllerC1')
routes.get('/investimentos/C1/count', sqlInvestimentosC1.count)
routes.get('/investimentos/C1/getItem/:id', sqlInvestimentosC1.getItem)
routes.get('/investimentos/C1/getAllItems', sqlInvestimentosC1.getAllItems)
routes.post('/investimentos/C1/createItem', save(sqlInvestimentosC1.createItem))
routes.put('/investimentos/C1/editItem', save(sqlInvestimentosC1.editItem))
routes.delete('/investimentos/C1/deleteItem/:id', save(sqlInvestimentosC1.deleteItem))

// Define Routes for 'Investimentos Ciclo C2'
const sqlInvestimentosC2 = require('../modules/controllers/custos_investimentos/investimentosControllerC2')
routes.get('/investimentos/C2/count', sqlInvestimentosC2.count)
routes.get('/investimentos/C2/getItem/:id', sqlInvestimentosC2.getItem)
routes.get('/investimentos/C2/getAllItems', sqlInvestimentosC2.getAllItems)
routes.post('/investimentos/C2/createItem', save(sqlInvestimentosC2.createItem))
routes.put('/investimentos/C2/editItem', save(sqlInvestimentosC2.editItem))
routes.delete('/investimentos/C2/deleteItem/:id', save(sqlInvestimentosC2.deleteItem))

// Define Routes for 'Investimentos Ciclo C3' 
const sqlInvestimentosC3 = require('../modules/controllers/custos_investimentos/investimentosControllerC3')
routes.get('/investimentos/C3/count', sqlInvestimentosC3.count)
routes.get('/investimentos/C3/getItem/:id', sqlInvestimentosC3.getItem)
routes.get('/investimentos/C3/getAllItems', sqlInvestimentosC3.getAllItems)
routes.post('/investimentos/C3/createItem', save(sqlInvestimentosC3.createItem))
routes.put('/investimentos/C3/editItem', save(sqlInvestimentosC3.editItem))
routes.delete('/investimentos/C3/deleteItem/:id', save(sqlInvestimentosC3.deleteItem))

// Define Routes for 'Investimentos Ciclo C4'
const sqlInvestimentosC4 = require('../modules/controllers/custos_investimentos/investimentosControllerC4')
routes.get('/investimentos/C4/count', sqlInvestimentosC4.count)
routes.get('/investimentos/C4/getItem/:id', sqlInvestimentosC4.getItem)
routes.get('/investimentos/C4/getAllItems', sqlInvestimentosC4.getAllItems)
routes.post('/investimentos/C4/createItem', save(sqlInvestimentosC4.createItem))
routes.put('/investimentos/C4/editItem', save(sqlInvestimentosC4.editItem))
routes.delete('/investimentos/C4/deleteItem/:id', save(sqlInvestimentosC4.deleteItem))

module.exports = routes
