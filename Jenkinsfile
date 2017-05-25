pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        git 'https://github.com/zainabed/java-quick-start.git'
      }
    }

    stage("Install") {
      steps {
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
