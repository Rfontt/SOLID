# SOLID

SRP = Single Responsability Principle
OCP = Open-closed Principle
LSP = Liskov Substitution Principle
ISP = Interface Segregation Principle
DIP = Dependency Inversion Principle

## SRP

A classe deve ter apenas uma responsabilidade.

> Uma classe deve ter um e apenas um motivo para mudar.

## OCP

Toda classe deve ser aberta para extensão e fechada para modificação.

> Criar interfaces; classes abstratas.

## LSP

> Essa ideia foi criada por uma mulher chamada Liskov

- As subclasses podem ser substituídas por suas classes pai

## ISP 

> Um classe não deve implementar métodos que ela não irá usar

- Devemos segregar essa o método da interface implementada, colocando-o em outra interface para que as classes que precisarem desse método, implemente essa nova interface.



## OBSERVAÇÃO

Na pasta: ``LSP-ISP`` irá conter um exemplo tanto do princípio de Liskov quanto o de Segregar Interface, as explicações do problema, da solução e do porquê de unir esses dois princípios estão no arquivo: ``LSP-ISP/README.md``