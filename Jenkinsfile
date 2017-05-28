pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        git 'https://github.com/zainabed/material.git'
      }
    }

    stage("Install") {
      steps {
        sh 'npm install'
      }
    }

    stage('validate') {
      steps {
        sh 'node_modules/karma-cli/bin/karma start'
        sh 'node_modules/karma-cli/bin/karma start --testType=integration'
      }
    }
  }
}
