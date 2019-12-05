
const db = {}
let sequence = 0;

class TaskService {

    static add(newTask) {
        return new Promise((resolve) => {
            const task = {
                id: ++sequence,
                idPedido: newTask.idPedido,
                idCliente: newTask.idCliente,
                nome: newTask.nome,
                cpf: newTask.cpf,
                recebedorisComprador: newTask.recebedorisComprador || false,
                data: newTask.data,
                localizacao: newTask.localizacao
            }
            db[task.id] = task;
            resolve(task);
        });
    }

    static getAll() {
        const toArray = key => db[key];
        return new Promise((resolve) => {
            const tasks = Object.keys(db).map(toArray);
            resolve(tasks);
        });
    }

    static getById(id) {
        return new Promise((resolve) => {
            resolve(db[id]);
        });
    }

    static update(taskId, updatedTask) {
        return new Promise(async (resolve) => {
            const task = await TaskService.getById(taskId);
            if(task) {
                const hasValue = updatedTask.done != null;
                task.done = hasValue ? updatedTask.done : task.done;
                task.description = updatedTask.description || task.description;
                resolve(task);
            }
            resolve(null);
        });
    }

    static delete(id) {
        return new Promise((resolve) => {
            const task = db[id];
            if(task) {
                delete db[id];
                resolve(true);
            }
            resolve(false);
        });
    }
}

module.exports = TaskService;