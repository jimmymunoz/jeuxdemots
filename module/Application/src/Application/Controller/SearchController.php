<?php


namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\View\Model\JsonModel;
use Zend\Json\Json;

class SearchController extends AbstractActionController
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
    	//$repositoryNode = $em->getRepository('\Application\Entity\Node');
    	//https://github.com/jadell/neo4jphp/wiki/Cypher-and-gremlin-queries
    	
    	/*
    	$this->params()->fromPost('paramname');   // From POST
		$this->params()->fromQuery('paramname');  // From GET
		$this->params()->fromRoute('paramname');  // From RouteMatch
		$this->params()->fromHeader('paramname'); // From header
		$this->params()->fromFiles('paramname');  // From file being uploaded
    	 */
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
		
		$dataResult = array(
			"success" => false,
			"message" => "",
			"data" => array(
				'r_associated' => array(),
			)
		);
		if( $result != null ){
			foreach ($result as $row) {
			    //echo $row['q']->getProperty('name') . "<br/>";
			    $dataResult['r_associated'][] = $row['q']->getProperty('name');
			}
		}
		/*
		// Example query: "START n=node(1) MATCH (x)-[:KNOWS]->(n) RETURN x, COUNT(n) AS y
		// column 'x' is a node object, column 'y' is a scalar value
		foreach ($result as $row) {
		    echo $row['x']->getProperty('name') . ": " . $row['y'] ."\n";
		}
		 */
		//$users = $query->getResult();
    	//$chat = $repositoryNode->findOneBy( array('name' => 'chat') );
    	//$chat = $repositoryNode->findOneByName('chat');
    	//var_dump($result);
    	$jsonObject = new JsonModel($dataResult);
        return $jsonObject;
    }
}