pipeline {
  agent any

  stages {

    stage('install') {
      steps {
        git 'https://github.com/zainabed/java-quick-start.git
        npm install
      }
    }

    stage('validate') {
      steps {
        karma start
      }
    }
  }
}
