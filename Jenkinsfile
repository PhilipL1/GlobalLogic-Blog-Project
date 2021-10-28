pipeline{
    agent any
    stages{
        stage('setUp'){
            steps{
                sh '''
                npm install 
                npm start
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
        stage('Build'){
            steps{
                 sh '''
                 npm run devStart
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
    }    
}