# Netflix Clone - Back-end

Back-end da aplicação **Netflix Close**.

## MondoDB

### Comando para o Linux

Os comandos básicos do MongoDB para o Linux podem ser acessados na [página de instalação](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#start-mongodb).

#### Inicializando o MongoDB

```sh
sudo systemctl start mongod

```

Se o comando acima retornar um erro, tentar o seguinte comando:

```sh
sudo systemctl daemon-reload

```

#### Verificando o status do MongoDB

```sh
sudo systemctl status mongod

```

Para inicializar o MongoDB com o sistema, o comando é:

```sh
sudo systemctl enable mongod

```

#### Parando o MongoDB

```sh
sudo systemctl stop mongod

```

#### Reiniciando o MongoDB

```sh
sudo systemctl restart mongod

```
