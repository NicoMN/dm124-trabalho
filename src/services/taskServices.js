
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
                recebedorIsComprador: newTask.recebedorIsComprador || false,
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
        const hasValue = updatedTask.recebedorIsComprador != null;
        task.recebedorIsComprador = hasValue ? updatedTask.recebedorIsComprador : task.recebedorIsComprador;

        task.idPedido = updatedTask.idPedido || task.idPedido,
        task.idCliente = updatedTask.idCliente || task.idCliente,
        task.nome = updatedTask.nome || task.nome,
        task.cpf = updatedTask.cpf || task.cpf,
        task.data = updatedTask.data || task.data,
        task.localizacao = updatedTask.localizacao || task.localizacao
        resolve(task);
      }
      resolve(null);
    })
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