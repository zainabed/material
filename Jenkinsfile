pipeline {
  agent any

  stages {

    stage('install') {
      steps {
        git 'https://github.com/zainabed/java-quick-start.git'
        bat 'npm install'
      }
    }

    stage('validate') {
      steps {
        bat 'karma start'
      }
    }
  }
}
