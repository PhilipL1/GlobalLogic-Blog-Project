pipeline{
    agent any
    stages{
        stage('setUp'){
            steps{
                sh "./Jenkins/setUp"
            }
        }
        stage('UI test'){
            steps{
                 sh "./Jenkins/UI-test"
            }
        }
        stage('Unit test'){
            steps{
                 sh "./Jenkins/Unit-test"
            }
        }
        stage('Build'){
            steps{
                 sh "./Jenkins/Build"
            }
        }
    }    
}