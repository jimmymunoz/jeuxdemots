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

	public function getDefByWord($word)
	{
		$result = null;
    	if( $word != "" ){

			$result =  $this->em->cypherQuery('
			MATCH (p:Word)-[r:r_raff_sem]->(q:Word)-[d:DEF]->(f:Definition)
			WHERE  p.name = {name} 
			RETURN p, f, type(d) as rel_type',
							 array(
							    'name' => $word,
							)
			);
    	}
    	$dataResult = array('definitions' => array());
			if( $result != null )
			{
			foreach ($result as $row) 
				{
			    
			    $type = $row['f']->getProperty('typeNode');
			    $rel_type = $row['rel_type'];
			    //if  ($rel_type == 'DEF') 
			    switch ($rel_type) {
			    	case 'DEF':
			    		$dataResult['definition'][] = $row['f']->getProperty('def');
			    		break;}
			  							
			  	}
		
			}
			return $dataResult;
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
			'definitions' => array(),
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
			'adjectif' => array(),
			'lieux_faire' => array(),
			'que_peut_faire' => array(),
			'que_peut_on_faire' => array(),
			'que_peut_on_faire' => array(),
			'que_peut_produire' => array(),
			'de_quoi_nourrir' => array(),
			'causes_associes' => array(),
			'moins-intense' => array(),
			'apres_mettre_sa_ceinture' => array(),
			'comme-predicat' => array(),
			'valeur_temp_dur_periode' => array(),
			'consequences_associes' => array(),
			'contraires' => array(),
			'contraires' => array(),
			'action_verbe' => array(),
			
			'masculin_equivalent' => array(),
			'action_pouvant_etre_faites_rapidement' => array(),
			'roles' => array(),
			'avec_quoi' => array(),
			'form_incorrect' => array(),
			'comme_instrument' => array(),
			
			'avant_temporel' => array(),
			'implication_agentives_de_messe' => array(),
			'Qui_quoi_peut_manger' => array(),
			'role_agentifs' => array(),
			'comment_peut_on' => array(),
			'comme_sujet' => array(),
			'comme_objet' => array(),
			'matiere' => array(),
			'ce_qui_produit' => array(),
			'ce_qui_soppose' => array(),
			'a_quoi_proche' => array(),
			'quantificateurs' => array(),
			'implication_ assosiee' => array(),
			'est_souvent_accompagne' => array(),
			'ce_qui_est_lie_a' => array(),
			'descend_de' => array(),
			'apres_banlieure_dortoir' => array(),
			'adjectif_adverbe' => array(),
			'quoi_peut_on_ouvrir_compte' => array(),
			'propriete_pertinent_pour' => array(),	
			'qui_peu_utiliser' => array(),
			'ayant_poisson_comestible_pour_element' => array(),
			'partie_de_word' => array(),
			'participe_passe' => array(),
			'termes_etymologiquement_apparente' => array(),
			'equivalent_semantique' => array(),
			'co_hyponymes' => array(),


				'nom_de_propriete' => array(),
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
			    		$dataResult['generiques'][] = $row['q']->getProperty('name');

			    		break;
			    	case 'r_anto':
			    		$dataResult['contraires'][] = $row['q']->getProperty('name');
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
			    		$dataResult['Qui_quoi_peut_manger'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_patient':
			    		//$dataResult['Qui_quoi_peut_manger'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_flpot':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');  ca  sert arien  FL_Numero
			    		break;
			    	case 'r_lieu':
			    		$dataResult['lieux_trouver'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_instr':
			    		$dataResult['avec_quoi'][] = $row['q']->getProperty('name');
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
			    		$dataResult['moins-intense'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_family':
			    		$dataResult['term_etymologiquement'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_carac_1':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_agent_1':
			    		$dataResult['que_peut_on_faire'][] = $row['q']->getProperty('name');
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
			    		$dataResult['comme-predicat'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_lieu_action':
			    		$dataResult['que_peut_on_faire'][] = $row['q']->getProperty('name');
			    		break;
			    	
			    	case 'r_sentiment':
			    		$dataResult['sentiments_emotions'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_error':
			    		$dataResult['form_incorrect'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_manner':
			    		$dataResult['comment_peut_on'][] = $row['q']->getProperty('name');
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


			    	$dataResult['role_agentifs'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_verbe_action':
			    		$dataResult['action_verbe'][] = $row['q']->getProperty('name');
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


			    	$dataResult['comme_instrument'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_aki':
			    		$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_time':

			    		$dataResult['valeur_temp_dur_periode'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_prev':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    	//  ca n'existe pas dans la  base

			    		break;
			    	case 'r_succ':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    	//  ca n'existe pas dans la  base
			    		break;
			    	case 'r_inhib':
			    		$dataResult['inhib'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_object_mater':

			    		$dataResult['matiere'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_successeur_time':

			    		$dataResult['apres_mettre_sa_ceinture'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_make':

			    		$dataResult['que_peut_produire'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_product_of':

			    	$dataResult['ce_qui_produit'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_against':
			    		$dataResult['a_quoi_proche'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_against_1':
			    	$dataResult['ce_qui_soppose'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_implication':
			    		$dataResult['implication_ assosiee'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_quantificateur':
			    		$dataResult['quantificateurs'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_masc':
			    	$dataResult['masculin_equivalent'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_fem':
			    		$dataResult['femenin_equivalent'][] = $row['q']->getProperty('name');
			    		break;
			    	case 'r_equiv':
			    		$dataResult['equivalent_semantique'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_manner_1':
			    	$dataResult['action_pouvant_etre_faites_rapidement'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_agentive_implication':
			    		$dataResult['implication_agentives_de_messe'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_instance':
			    		$dataResult['instances'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_verb_real':
			    		$dataResult['termes_etymologiquement_apparente'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_termgroup':// GPHILO1
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_chunk_head':
			    		$dataResult['comme_tete_syntaxique'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_similar':// dificile
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_set_item':
			    		$dataResult['partie_de_word'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_item_set':
			    		$dataResult['ayant_poisson_comestible_pour_element'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_processus_gt_agent':// nexiste pas 
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_variante':
			    		$dataResult['variantes'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_has_personnage':
			    		$dataResult['association_idee'][] = $row['q']->getProperty('name');
			    		break;
		    		case 'r_has_auteur':
			    		$dataResult['association_idee'][] = $row['q']->getProperty('name');
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
						$dataResult['est_souvent_accompagne'][] = $row['q']->getProperty('name');
						break;
					case 'r_predecesseur_space'://cite dort =)campagne
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_successeur_space':
						$dataResult['apres_banlieure_dortoir'][] = $row['q']->getProperty('name');
						break;
					case 'r_beneficiaire':
						$dataResult['quoi_peut_on_ouvrir_compte'][] = $row['q']->getProperty('name');
						break;
					case 'r_descend_de':// rhipidistien
						$dataResult['descend_de'][] = $row['q']->getProperty('name');
						break;
					case 'r_social_tie'://Olivia De Havilland
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_tributary'://le mot Seine
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_sentiment_1':// anxiété je  trouve pas le q
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_linked_with':
					$dataResult['ce_qui_est_lie_a'][] = $row['q']->getProperty('name');
						break;
					case 'r_domain_subst':// association idde
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_prop':
						$dataResult['propriete_pertinent_pour'][] = $row['q']->getProperty('name');
						break;
					case 'r_foncteur':// les truc de _FL:15
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_comparison':// nexiste pas 
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_but':// nexiste pas 
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_processus_gt_patient':// nexiste pas 
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_but_1':// nexiste pas 
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_own':// voisin nexiste pas
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_own_1':// avec lemot voisine
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_compl_agent':// nexiste pas 
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_activ_voice':// nexiste pas 
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_cooccurrence'://
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_make_use_of':
						$dataResult['qui_peu_utiliser'][] = $row['q']->getProperty('name');
						break;
					case 'r_is_used_by':// pas  troubve mot  grill
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_verb_ppas':
						$dataResult['participe_passe'][] = $row['q']->getProperty('name');
						break;
					case 'r_verb_aux'://nexiste pas  dans la base 
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_cohypo':
						$dataResult['co_hyponymes'][] = $row['q']->getProperty('name');
						break;
					case 'r_adj_nomprop':
						$dataResult['adjectif'][] = $row['q']->getProperty('name');
						break;
					case 'r_nomprop_adj':
					$dataResult['nom_de_propriete'][] = $row['q']->getProperty('name');
						break;
					case 'r_adj_adv':
					$dataResult['adjectif_adverbe'][] = $row['q']->getProperty('name');
						break;
					case 'r_predecesseur_logic'://cette relation nexsite 
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_successeur_logic':// nexsite pas
						//$dataResult['synonimes'][] = $row['q']->getProperty('name');
						break;
					case 'r_link': //cette relation nexsite pas
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