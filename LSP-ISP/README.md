# Liskov Substitution Principle - Interface Segregation Principle

Esse módulo irá representar tanto o LSP quanto o ISP, pois o problema inicial foi gerado por uma quebra no princípio de Liskov.

## Sobre o problema

Esse módulo irá ter um projeto voltado para filmes. Filmes podem ter muitas subclasses, nesse projeto específico, vamos criar a interface **Movie** para que os filmes possam implementar seus métodos. Porém, nem todos os métodos de **Movie** vai se adequar a todos os filmes e isso fere o princípio de Liskov. Para resolver isso iremos segregar os métodos que não pertecem a todos os filmes em uma outra interface, usando assim o interface segregation principle e permitido que as classes não precisem implementar métodos que não irão usar.