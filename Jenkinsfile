pipeline{
    agent any
    stages{
        stage('setUp'){
            steps{
                sh " bash ./Jenkins/setUp.sh"
            }
        }
        stage('UI test'){
            steps{
                 sh "bash ./Jenkins/UI-test.sh"
            }
        }
        stage('Unit test'){
            steps{
                 sh "bash ./Jenkins/Unit-test.sh"
            }
        }
        stage('Build'){
            steps{
                 sh "bash ./Jenkins/Build.sh"
            }
        }
    }    
}