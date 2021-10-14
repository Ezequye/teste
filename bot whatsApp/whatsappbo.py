#importar as bibliotecas
from selenium import webdriver
import time
from webdriver_manager import driver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys

#navegar ate o whatsapp
driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get('https://web.whatsapp.com/')
time.sleep(10)

#definir contatos e grupos e mensagem a ser enviada
contatos = ['Familia','vitor']
mensagem = 'óla'

#buscar contatos/grupos

def buscar_contato(contato):
    campo_pesquisa = driver.find_element_by_xpath(                                     '//div[contains(@class,"copyable-text selectable-text")]')
    time.sleep(3)
    campo_pesquisa.Click()
    campo_pesquisa.send_keys(contato)
    campo_pesquisa.send_keys(Keys.ENTER)


for contato in contatos:
    buscar_contato(contato)
    # enviar_mensagem(mensagem)


#campo de pesquisa 'copyable-text selectable-text'
#campo de mensagem privada'copyable-text selectable-text'




#enviar mensagens para o contato/grupo
