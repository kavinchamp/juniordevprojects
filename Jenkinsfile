pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t junior-web-app:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker stop junior-web-app || true'
                sh 'docker rm junior-web-app || true'
                sh 'docker run -d --name junior-web-app -p 4510:80 junior-web-app:latest'
            }
        }

        stage('Health Check') {
            steps {
                sh 'curl -f http://localhost:4510'
            }
        }
    }
}
