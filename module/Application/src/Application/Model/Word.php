<?php
namespace Application\Model;

class Word
{
	//Entity Manager
	private $em;

	public function __construct($em)
     {
        $this->em = $em;
	 }

  /**
   * Gets the nodes by word.
   *
   * @param      string  $word   The word
   * @return     array   The nodes by word.
   */
	public function getNodesByWord($word)
	{
		$result = null;
    	if( $word != "" ){

	    	$result = $this->em->cypherQuery('
				MATCH (p:Word)-[r]->(q:Word) 
				WHERE p.name = {name}
				RETURN q, r, type(r) AS rel_type
				',
				 array(
				    'name' => $word,
				)
			);
    	}
		$dataResult = array(
			'r_pos' => array(),
			'lemme' => array(),
			'info_semantique' => array(),
			'femenin_equivalent' => array(),
			'variantes' => array(),
			'definitions' => array(
				"def1",
				"def2",
				"def3",
				"def4",
				"def5",
			),
			'rafinement_semantique' => array(),
			'gloses' => array(),
			'inhib' => array(),
			'association_idees' => array(),
			'tataki' => array(),
			'wikipedia' => array(),
			'concurrences' => array(),
			'themes_domaines' => array(),
			'synonimes' => array(),
			'generiques' => array(),
			'generiques_incompatibles' => array(),
			'specifiques' => array(),
			'instances' => array(),
			'parties' => array(),
			'fait_partie_de' => array(),
			'plus_intence' => array(),
			'plus_gros' => array(),
			'moins_gros' => array(),
			'term_etymologiquement' => array(),
			'locution_term_composes' => array(),
			'caracteristiques' => array(),
			'ayant_caracteristique' => array(),
			'couleurs_pour' => array(),
			'lieux_trouver' => array(),
			'lieux_faire' => array(),
			'que_peut_faire' => array(),
			'que_peut_on_faire' => array(),
			'que_peut_on_faire' => array(),
			'de_quoi_nourrir' => array(),
			'causes_associes' => array(),
			'consequences_associes' => array(),
			'sentiments_emotions' => array(),
			'roles' => array(),
			'avant_temporel' => array(),
			'comme_sujet' => array(),
			'comme_objet' => array(),
			'comme_tete_syntaxique' => array(),
		);
		if( $result != null ){
			foreach ($result as $row) {
			    //echo $row['q']->getProperty('name') . "<br/>";
			    $type = $row['q']->getProperty('typeNode');
			    $rel_type = $row['rel_type'];
			    //var_dump($type);
			    //die();
			    switch ($rel_type) {
			    	case 'r_associated':
			    		//$dataResult['themes_domaines'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_domain':
			    		$dataResult['themes_domaines'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_raff_sem':
			    		$dataResult['rafinement_semantique'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_pos':
			    		$dataResult['r_pos'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_syn':
			    		$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_isa':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_anto':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_hypo':
			    		$dataResult['specifiques'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_has_part':
			    		$dataResult['parties'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_holo':
			    		$dataResult['fait_partie_de'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_locution':
			    		$dataResult['locution_term_composes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_agent':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_patient':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_flpot':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_lieu':
			    		$dataResult['lieux_trouver'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_instr':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_carac':
			    		$dataResult['caracteristiques'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_lemma':
			    		$dataResult['lemme'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_magn':
			    		$dataResult['plus_intence'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_antimagn':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_family':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_carac_1':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_agent_1':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_instr_1':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_patient_1':
			    		$dataResult['que_peut_faire'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_domain_1':
			    		$dataResult['comme_objet'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_lieu_1':
			    		$dataResult['lieux_trouver'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_chunk_pred':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_lieu_action':
			    		$dataResult['que_peut_on_faire'][] = $row['q']->getProperty('name');
			    		break;
			    	
			    	case 'r_sentiment':
			    		$dataResult['sentiments_emotions'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_error':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_manner':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_meaning':
			    		$dataResult['gloses'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_infopot':
			    		$dataResult['info_semantique'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_telic_role':
			    		$dataResult['roles'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_agentif_role':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_verbe_action':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_causatif':
			    		$dataResult['causes_associes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_conseq':
			    		$dataResult['consequences_associes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_chunk_sujet':
			    		$dataResult['comme_sujet'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_chunk_objet':
			    		$dataResult['comme_objet'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_chunk_instr':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_aki':
			    		$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_time':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_prev':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_succ':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_inhib':
			    		$dataResult['inhib'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_object_mater':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_successeur_time':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_make':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_product_of':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_against':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_against_1':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_implication':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_quantificateur':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_masc':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_fem':
			    		$dataResult['femenin_equivalent'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_equiv':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_manner_1':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_agentive_implication':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_instance':
			    		$dataResult['instances'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_verb_real':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_termgroup':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_chunk_head':
			    		$dataResult['comme_tete_syntaxique'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_similar':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_set_item':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_item_set':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_processus_gt_agent':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_variante':
			    		$dataResult['variantes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_has_personnage':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_has_auteur':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_can_eat':
			    		$dataResult['de_quoi_nourrir'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_syn_strict':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_has_actors':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_deplac_mode':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_der_morpho':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_has_interpret':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_color':
						$dataResult['couleurs_pour'][] = $row['q']->getProperty('name');
						break;
					case 'r_learning_model':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_wiki':
						$dataResult['wikipedia'][] = $row['q']->getProperty('name');
						break;
					case 'r_annotation':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_cible':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_symptomes':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_annotation_exception':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_predecesseur_time':
						$dataResult['avant_temporel'][] = $row['q']->getProperty('name');
						break;
					case 'r_diagnostique':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_is_smaller_than':
						$dataResult['plus_gros'][] = $row['q']->getProperty('name');
						break;
					case 'r_is_bigger_than':
						$dataResult['moins_gros'][] = $row['q']->getProperty('name');
						break;
					case 'r_accomp':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_predecesseur_space':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_successeur_space':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_beneficiaire':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_descend_de':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_social_tie':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_tributary':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_sentiment_1':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_linked_with':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_domain_subst':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_prop':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_foncteur':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_comparison':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_but':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_processus_gt_patient':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_but_1':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_own':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_own_1':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_compl_agent':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_activ_voice':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_cooccurrence':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_make_use_of':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_is_used_by':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_verb_ppas':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_verb_aux':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_cohypo':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_adj_nomprop':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_nomprop_adj':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_adj_adv':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_predecesseur_logic':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_successeur_logic':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_link':
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
			    	default:
			    		# code...
			    		break;
			    }
			}
		}
		//print_r($dataResult);
		//die();
		return $dataResult;
	}

	public function autocompleteWord($strSearch)
	{
		$result = null;
    	if( $strSearch != "" ){
    		/*
	    	$result = $this->em->cypherQuery('
				START n = node(*) 
				WHERE n.Name LIKE(\'%{name}%\') 
				RETURN n.Name;
				',
				 array(
				    'name' => $word,
				)
			);
    		 */
			$result = $this->em->cypherQuery('
				MATCH (n:Word) 
				WHERE n.name =~ \'(?i).*' . $strSearch . '.*\' 
				RETURN n.name AS value, n.eid AS id
				LIMIT 10;
				',
				 array(
				   // 'strSearch' => $strSearch,
				)
			);
    	}
    	$wordList = array();
    	if( $result != null ){
			foreach ($result as $row) {
				$wordList[] = array('id' => $row['id'], 'value' => $row['value']);
			}
		}
		return $wordList;
    }
}
?>