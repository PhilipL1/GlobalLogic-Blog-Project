pipeline{
    agent any
    stages{
        stage('setUp'){
            steps{
                sh "./Jenkins/setUp"
            }
        }
    }
    stages{
        stage('UI test'){
            steps{
                 sh "./Jenkins/UI-test"
            }
        }
    }
    stages{
        stage('Unit test'){
            steps{
                 sh "./Jenkins/Unit-test"
            }
        }
    }
    stages{
        stage('Build'){
            steps{
                 sh "./Jenkins/Build"
            }
        }
    }
}