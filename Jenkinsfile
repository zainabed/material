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
        sh 'karma start'
        sh 'karma start --testType=integration'
      }
    }
  }
}
