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
                 npm start
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