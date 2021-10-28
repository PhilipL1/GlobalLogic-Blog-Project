pipeline{
    agent any
    stages{
        stage('setUp'){
            steps{
                sh '''
                npm install 
                '''
            }
        }
        stage('UI test'){
            steps{
                 sh '''
                 npm run cypress
                 '''
            }
        }
        stage('Unit test'){
            steps{
                 sh '''
                 npm run test jest
                 '''
            }
        }
        stage('Build'){
            steps{
                 sh '''
                 npm run devStart
                 '''
            }
        }
    }    
}