var assert = require('assert')
const { getProjects, postProject, deleteProject, putProject } = require('./dist/routes/projects/functions') 

const projects = {title: 'Test 1', description:'Testeo1', img:'http//Tet1.com', colaborations: 'Testeo1'}


describe('TEST DATA MONGO', () => {

    beforeEach(async() => {
    

       await postProject(projects.title, projects.description, projects.img, projects.colaborations)
        
    })

    afterEach( () => {

        deleteProject('test')
    })

    describe('Data projects', () => {

        test('GET',  () => {
            const data = getProjects()

            expect(data).toequal(projects)
        })

        test('PUT', () => {

            const newData = putProject('test', projects.description, projects.img, projects.colaborations)

            expect(newData).toequal({...projects, title: 'test'})
        })
    })

})