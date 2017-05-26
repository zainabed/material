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
        bat 'npm install'
      }
    }

    stage('validate') {
      steps {
        bat 'karma start'
        bar 'karma start --testType=integration'
      }
    }
  }
}
