const itensPorSucursal = {
      TancredoNeves: ["Agenor de Carvalho", "Cristal da Calama", "Jd Santana 1", "Jd Santana 2", "Pantanal", "Socialista", "Tancredo Neves", "Três Marias", "Universitário"],
      Caladinho: ["Caladinho", "Caladinho União", "Cidade Nova", "Cidade do Lobo", "Novo Horizonte", "Gurgel"],
      saofrancisco: ["Jk 2", "São Francisco", "Ronaldo Aragão", "Ulisses Guimarães", "Km-13"],
      uniaoVitoria: ["Cuniã", "Esperança da Comunidade", "Maringá", "Boa Vista", "União da Vitória"],
      setorialPvh: ["Setorial Porto Velho", "Areal", "Tucumanzal", "Costa e Silva", "São Sebastião", "Pedrinhas"]
    };

const resultadosEspeciais = {
      // Sucursal Tancredo Neves
      "Agenor de Carvalho": "1209 R. Arruda Fontes Cabral,Porto Velho, Rondônia",
      "Cristal da Calama": "Rua Petalita Cristal da Calama - Porto Velho, RO",
      "Jd Santana 1": "R. Anápolis, 9159 - Jardim Santana, Porto Velho - RO, 76828-636",
      "Jd Santana 2": "R. Raimundo Cantuária, 3522 - Jardim Santana, Porto Velho - RO, 76820-180",
      "Pantanal": "R. Turquia, 8539 - Pantanal",
      "Socialista": "Avenida Rio de Janeiro, 8885 - Socialista, Porto Velho - RO",
      "Tancredo Neves": "Av. José Amador dos Reis, 3930 - Tancredo Neves, Porto Velho - RO, 76829-580",
      "Três Marias": "Três Marias",
      "Universitário": "313 R. São Lourenço Porto Velho, Rondônia",
      
      // Caladinho
      "Caladinho": "Rua Tancredo Neves, 4244, Bairro Caladinho",
      "Caladinho União": "Rua Abacateiro, 5922, Bairro Cohab",
      "Cidade Nova": "Rua Cícera Severina, 3634 - Bairro Cidade Nova",
      "Cidade do Lobo": "Rua Emílio Feitosa, 3439 - Bairro Cidade do Lobo",
      "Eldorado": "Rua Algodoeiro, 4590, Bairro Eldorado",
      "Eletronorte": "Rua Angico, 3250, Bairro Eletronorte",
      "Cohab": "Rua Anari, 6138, Bairro Cohab Floresta",
      "Gurgel": "Rua Noroeste, 1797 - Bairro Castanheira",
      "Novo Horizonte": "Rua Elias de Souza, 3802, Bairro Conceição",
          
      // Sucursal São Francisco
      "JK": "R. Itatuape, 7917 - Juscelino Kubitschek, Porto Velho - RO",
      "São Francisco": "Endereço aqui",
      "Ronaldo Aragão": "R. Paca, 12152 - Ronaldo Aragão, Porto Velho - RO",
      "Ulisses Guimarães": "R. Centauro, 2-11952 - Ulysses Guimarães",
      "Km-13": "Endereço aqui",
      
      // Sucursal União da Vitória
      "União da Vitória": "Av. Calama, 7175 - União da Vitória, Porto Velho - RO",
      "Cuniã": "Av. 7 de Setembro - Cuniã, Porto Velho - RO",
      "Esperança da Comunidade": "Rua Sheila Regina, 5191 - Esperança da Comunidade, Porto Velho - RO",
      "Maringá": "Rua Hilton Guedez - Maringá, Porto Velho - RO",
      "Boa Vista": "Endereço aqui",
      
      // Setorial PVH
      "Setorial Porto Velho": "Rua Brasília, 2145 - Centro",
      "Areal da Floresta": "R. das Flores, 111 - Bairro Areal da Floresta",
      "Tucumanzal": "R. Bahia, 120 - Tucumanzal",
      "Costa e Silva": "Av. dos Imigrantes, 2810 - Costa e Silva",
      "São Sebastião": "Rua Mário de Andrade, 5866 - São Sebastiao, Porto Velho - RO",
      "Pedrinhas": "Rua Jamari, 2079 - Pedrinhas, Porto Velho - RO",
      "Nacional": "Estr. Belmonte, 3019 - Nacional, Porto Velho - RO",
    };
    
    
function mostrarItensCorrespondentes() {
      var sucursal = document.getElementById("sucursal");
      var itensCorrespondentes = document.getElementById("itensCorrespondentes");

      // Limpa as opções atuais
      itensCorrespondentes.innerHTML = "<option value='selecione'>Selecione uma congregação primeiro</option>";

      // Obtém o valor selecionado no campo de sucursal
      var sucursalSelecionada = sucursal.value;

      // Cria as opções de itens correspondentes com base na fruta selecionada
      if (sucursalSelecionada !== "selecione") {
        var itens = itensPorSucursal[sucursalSelecionada];
        itens.forEach(item => {
          adicionarItem(itensCorrespondentes, item);
        });

        // Atualiza o mapa e o endereço com base no item selecionado
        var itemSelecionadoValor = itensCorrespondentes.value;
        atualizarMapaEEndereco(itemSelecionadoValor);
      }
    }

function adicionarItem(lista, texto) {
      var opcao = document.createElement("option");
      opcao.text = texto;
      lista.add(opcao);
    }
    
function mostrarItemSelecionado() {
        var itensCorrespondentes = document.getElementById("itensCorrespondentes");
        var itemSelecionado = document.getElementById("itemSelecionado");

        // Obtém o valor selecionado na segunda lista
        var itemSelecionadoValor = itensCorrespondentes.value;

        // Mostra o item selecionado
        if (resultadosEspeciais[itemSelecionadoValor]) {
          var endereco = resultadosEspeciais[itemSelecionadoValor];
          var enderecoFormatado = encodeURIComponent(endereco);
          var mapsLink = "https://www.google.com/maps/search/?api=1&query=" + enderecoFormatado;

          itemSelecionado.innerHTML = endereco + "<br><a href='" + mapsLink + "' target='_blank'>Ver no Google Maps</a>";
        } else {
          itemSelecionado.textContent = itemSelecionadoValor;
        }
      }
