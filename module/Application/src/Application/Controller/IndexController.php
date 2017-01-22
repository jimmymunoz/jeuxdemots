<?php


namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\View\Model\JsonModel;
use Application\Model\Word;
use Zend\Json\Json;



class IndexController extends AbstractActionController
{
    public function indexAction()
    {
		return new ViewModel();
    }

    /**
     * [searchAction description]
     * http://jeuxdemots.localhost/application/index/search?word=chat
     * @return [type] [description]
     */
    public function searchAction()
    {
    	$result = null;
    	$success = false;
    	$data = [];
    	$message = "";
    	try {
	    	$WordModel = new \Application\Model\Word(
	    		$this->getServiceLocator()->get('neo4j.entitymanager.ogm_default') 
	    	);
			$word = $this->params()->fromQuery('word');
	    	$data = $WordModel->getNodesByWord($word);
	    	$success = true;
		
		} catch (Exception $e) {
		    $message = 'Exception reçue : ' .  $e->getMessage() . "";
		}
    	
		
		$dataResult = array(
			"success" => $success,
			"message" => $message,
			"data" => $data
		);
		
    	$jsonObject = new JsonModel($dataResult);
        return $jsonObject;
    }
    
    /**
     * [searchAction description]
     * http://jeuxdemots.localhost/application/index/autocompleteword?word=chat
     * @return [type] [description]
     */
    public function autocompletewordAction()
    {
    	$result = null;
    	$success = false;
    	$data = [];
    	$message = "";
    	try {
	    	$WordModel = new \Application\Model\Word(
	    		$this->getServiceLocator()->get('neo4j.entitymanager.ogm_default') 
	    	);
			$word = $this->params()->fromQuery('word');
	    	$data = $WordModel->autocompleteWord($word);
	    	$success = true;
		
		} catch (Exception $e) {
		    $message = 'Exception reçue : ' .  $e->getMessage() . "";
		}
		
		$dataResult = array(
			"success" => $success,
			"message" => $message,
			"data" => $data
		);
		$jsonObject = new JsonModel($dataResult);
        return $jsonObject;
    }

    /**
     * [searchAction description]
     * http://jeuxdemots.localhost/application/index/searchwordrest?word=chat
     * @return [type] [description]
     */
    public function searchwordrestAction()
    {
    	$result = null;
    	$success = false;
    	$data = [];
    	$message = "";
    	try {
	    	$word = $this->params()->fromQuery('word');
	    	$result = null;
	    	if( $word != "" ){

		    	$em = $this->getServiceLocator()->get('neo4j.entitymanager.ogm_default');
				$result = $em->cypherQuery('
					MATCH (p)-[r:r_associated]->(q) 
					WHERE p.name = {name}
					RETURN q LIMIT 25', array(
					    'name' => $word,
					)
				);
	    	}
	    	$success = true;
		
		} catch (Exception $e) {
		    $message = 'Exception reçue : ' .  $e->getMessage() . "";
		}
		
		$dataResult = array(
			"success" => $success,
			"message" => $message,
			"data" => array(
				'r_associated' => array(),
			)
		);
		if( $result != null ){
			foreach ($result as $row) {
			    $dataResult['r_associated'][] = $row['q']->getProperty('name');
			}
		}
		$jsonObject = new JsonModel($dataResult);
        return $jsonObject;
    }
}
