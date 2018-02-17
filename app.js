var app = angular.module('pagodeTodo', []);

app.controller('taskCreator', function ($rootScope, $scope) {
  $scope.newTask = '';
  $scope.addTask = function () {
    $rootScope.$broadcast('addTask', $scope.newTask);
    $scope.newTask = '';
  };
});

app.controller('taskList', function ($scope) {
  $scope.taskList = [
    {
      text: 'Concluir o primeiro item na lista de tarefas',
      done: true,
      onEdit: false,
    },
    {
      text: 'Apagar o primeiro item na lista de tarefas',
      done: false,
      onEdit: false,
    },
    {
      text: 'Adicionar o primeiro item na lista de tarefas',
      done: false,
      onEdit: false,
    },
  ];

  $scope.$on('addTask', function (e, task) {
    $scope.taskList.push({
      text: task,
      done: false,
    });
  });

  $scope.deleteTask = function () {
    $scope.taskList.splice(this.$index, 1);
  }

  $scope.doTask = function () {
    this.task.done = !this.task.done
  }

  $scope.HandleEdit = function () {
    this.task.onEdit = !this.task.onEdit;
  }

  $scope.editTask = function () {
    if (this.newTaskText !== '' && !angular.isUndefined(this.newTaskText)) {
      this.task.text = this.newTaskText;
    }
    this.task.onEdit = false;
  }
});