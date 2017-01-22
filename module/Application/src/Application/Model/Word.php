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
			RETURN f, type(d) as rel_type',
				 array(
				    'name' => $word,
				)
			);
    	}
    	$dataResult = array();
		if( $result != null ) {
			foreach ($result as $row) {
		        $type = $row['f']->getProperty('typeNode');
			    $rel_type = $row['rel_type'];
			    //if  ($rel_type == 'DEF') 
			    switch ($rel_type) {
			    	case 'DEF':
			    		$dataResult[] = $row['f']->getProperties(['def', 'termid', 'rel_type']);
			    		break;
			   	}
			  							
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
			'action_verbe' => array(),

			'sentiments_emotions' => array(),
			'masculin_equivalent' => array(),
			'action_pouvant_etre_faites_rapidement' => array(),
			'roles' => array(),
			'avec_quoi' => array(),
			'form_incorrect' => array(),
			'comme_instrument' => array(),
			'avant_temporel' => array(),
			'implication_agentives_de_messe' => array(),
			'qui_quoi_peut_manger' => array(),
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
			    		//$dataResult['themes_domaines'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_domain':
			    		//$dataResult['themes_domaines'][] = $this->getPropertiesTermsByRow($row);
			    		$dataResult['themes_domaines'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_raff_sem':
			    		$dataResult['rafinement_semantique'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_pos':
			    		$dataResult['r_pos'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_syn':
			    		$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_isa':
			    		$dataResult['generiques'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_anto':
			    		//$dataResult['synonimes'][] = $row['q']->getProperty('name');

			    		$dataResult['contraires'][] = $this->getPropertiesTermsByRow($row);

			    		break;
			    	case 'r_hypo':
			    		$dataResult['specifiques'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_has_part':
			    		$dataResult['parties'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_holo':
			    		$dataResult['fait_partie_de'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_locution':
			    		$dataResult['locution_term_composes'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_agent':
			    		$dataResult['qui_quoi_peut_manger'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_patient':
			    		//$dataResult['Qui_quoi_peut_manger'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_flpot':
			    		//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);  ca  sert arien  FL_Numero
			    		break;
			    	case 'r_lieu':
			    		$dataResult['lieux_trouver'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_instr':
			    		$dataResult['avec_quoi'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_carac':
			    		$dataResult['caracteristiques'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_lemma':
			    		$dataResult['lemme'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_magn':
			    		$dataResult['plus_intence'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_antimagn':
			    		$dataResult['moins-intense'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_family':
			    		$dataResult['term_etymologiquement'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_carac_1':
			    		//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_agent_1':
			    		$dataResult['que_peut_on_faire'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_instr_1':
			    		//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_patient_1':
			    		$dataResult['que_peut_faire'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_domain_1':
			    		$dataResult['comme_objet'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_lieu_1':
			    		$dataResult['lieux_trouver'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_chunk_pred':
			    		$dataResult['comme-predicat'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_lieu_action':
			    		$dataResult['que_peut_on_faire'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	
			    	case 'r_sentiment':
			    		$dataResult['sentiments_emotions'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_error':
			    		$dataResult['form_incorrect'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_manner':
			    		$dataResult['comment_peut_on'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_meaning':
			    		$dataResult['gloses'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_infopot':
			    		$dataResult['info_semantique'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_telic_role':
			    		$dataResult['roles'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_agentif_role':
			    		$dataResult['role_agentifs'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_verbe_action':
			    		$dataResult['action_verbe'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_causatif':
			    		$dataResult['causes_associes'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_conseq':
			    		$dataResult['consequences_associes'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_chunk_sujet':
			    		$dataResult['comme_sujet'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_chunk_objet':
			    		$dataResult['comme_objet'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_chunk_instr':
				    	$dataResult['comme_instrument'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_aki':
			    		$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_time':
			    		$dataResult['valeur_temp_dur_periode'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_prev':
			    		//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
			    	//  ca n'existe pas dans la  base

			    		break;
			    	case 'r_succ':
			    		//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
			    	//  ca n'existe pas dans la  base
			    		break;
			    	case 'r_inhib':
			    		$dataResult['inhib'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_object_mater':
			    		$dataResult['matiere'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_successeur_time':
			    		$dataResult['apres_mettre_sa_ceinture'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_make':
			    		$dataResult['que_peut_produire'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_product_of':
			    		$dataResult['ce_qui_produit'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_against':
			    		$dataResult['a_quoi_proche'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_against_1':
				    	$dataResult['ce_qui_soppose'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_implication':
			    		$dataResult['implication_ assosiee'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_quantificateur':
			    		$dataResult['quantificateurs'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_masc':
			    		$dataResult['masculin_equivalent'][] = $this->getPropertiesTermsByRow($row);
			    		break;
		    		case 'r_fem':
			    		$dataResult['femenin_equivalent'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_equiv':
			    		$dataResult['equivalent_semantique'][] = $this->getPropertiesTermsByRow($row);
			    		break;
		    		case 'r_manner_1':
			    	$dataResult['action_pouvant_etre_faites_rapidement'][] = $this->getPropertiesTermsByRow($row);
			    		break;
		    		case 'r_agentive_implication':
			    		$dataResult['implication_agentives_de_messe'][] = $this->getPropertiesTermsByRow($row);
			    		break;
		    		case 'r_instance':
			    		$dataResult['instances'][] = $this->getPropertiesTermsByRow($row);
			    		break;
		    		case 'r_verb_real':
			    		$dataResult['termes_etymologiquement_apparente'][] = $this->getPropertiesTermsByRow($row);
			    		break;
		    		case 'r_termgroup':// GPHILO1
			    		//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
			    		break;
		    		case 'r_chunk_head':
			    		$dataResult['comme_tete_syntaxique'][] = $this->getPropertiesTermsByRow($row);
			    		break;
		    		case 'r_similar':// dificile
			    		//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
			    		break;
		    		case 'r_set_item':
			    		$dataResult['partie_de_word'][] = $this->getPropertiesTermsByRow($row);
			    		break;
		    		case 'r_item_set':
			    		$dataResult['ayant_poisson_comestible_pour_element'][] = $this->getPropertiesTermsByRow($row);
			    		break;
		    		case 'r_processus_gt_agent':// nexiste pas 
			    		//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
			    		break;
		    		case 'r_variante':
			    		$dataResult['variantes'][] = $this->getPropertiesTermsByRow($row);
			    		break;
		    		case 'r_has_personnage':
			    		$dataResult['association_idee'][] = $this->getPropertiesTermsByRow($row);
			    		break;
		    		case 'r_has_auteur':
			    		$dataResult['association_idee'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_can_eat':
			    		$dataResult['de_quoi_nourrir'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_syn_strict':
			    		//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_has_actors':
			    		//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_deplac_mode':
			    		//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
			    		break;
			    	case 'r_der_morpho':
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_has_interpret':
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_color':
						$dataResult['couleurs_pour'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_learning_model':
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_wiki':
						$dataResult['wikipedia'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_annotation':
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_cible':
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_symptomes':
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_annotation_exception':
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_predecesseur_time':
						$dataResult['avant_temporel'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_diagnostique':
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_is_smaller_than':
						$dataResult['plus_gros'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_is_bigger_than':
						$dataResult['moins_gros'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_accomp':
						$dataResult['est_souvent_accompagne'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_predecesseur_space'://cite dort =)campagne
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_successeur_space':
						$dataResult['apres_banlieure_dortoir'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_beneficiaire':
						$dataResult['quoi_peut_on_ouvrir_compte'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_descend_de':// rhipidistien
						$dataResult['descend_de'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_social_tie'://Olivia De Havilland
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_tributary'://le mot Seine
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_sentiment_1':// anxiété je  trouve pas le q
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_linked_with':
						$dataResult['ce_qui_est_lie_a'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_domain_subst':// association idde
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_prop':
						$dataResult['propriete_pertinent_pour'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_foncteur':// les truc de _FL:15
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_comparison':// nexiste pas 
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_but':// nexiste pas 
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_processus_gt_patient':// nexiste pas 
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_but_1':// nexiste pas 
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_own':// voisin nexiste pas
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_own_1':// avec lemot voisine
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_compl_agent':// nexiste pas 
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_activ_voice':// nexiste pas 
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_cooccurrence'://
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_make_use_of':
						$dataResult['qui_peu_utiliser'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_is_used_by':// pas  troubve mot  grill
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_verb_ppas':
						$dataResult['participe_passe'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_verb_aux'://nexiste pas  dans la base 
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_cohypo':
						$dataResult['co_hyponymes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_adj_nomprop':
						$dataResult['adjectif'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_nomprop_adj':
						$dataResult['nom_de_propriete'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_adj_adv':
						$dataResult['adjectif_adverbe'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_predecesseur_logic'://cette relation nexsite 
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_successeur_logic':// nexsite pas
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
					case 'r_link': //cette relation nexsite pas
						//$dataResult['synonimes'][] = $this->getPropertiesTermsByRow($row);
						break;
			    	default:
			    		# code...
			    		break;
			    }
			}
		}
		$dataResult['definitions'] = $this->getDefByWord($word);
		//print_r($dataResult['definitions']); die();
		$newDataResult = $this->addExtraProperties($dataResult);
		return $newDataResult;
	}

	private function getMaxAndMinWeight($arrValues){
		$max_value = 0;
		$min_value = 0;
		if( isset($arrValues[0]['w']) ){
			foreach ($arrValues as $value) {
				if( $value['w'] > $max_value  ){
					$max_value = $value['w'];
				}
				if( $value['w'] < $min_value  ){
					$min_value = $value['w'];
				}

			}
		}
		return array('max' => $max_value, 'min' => $min_value);
	}

	private function getPropertiesTermsByRow($row){
		 $tmp = $row['q']->getProperties(['name', 't', 'w', 'nf']);
		 if($tmp['nf'] != ''){
		 	$tmp['name'] = $tmp['nf'];
		 }
		 array_unshift($tmp, 'nf');
		 return $tmp;
	}

	/**
	 * Adds extra properties to use in front-end.
	 *
	 * @param      <type>  $dataResult  The data result
	 *
	 * @return     array   ( description_of_the_return_value )
	 */
	private function addExtraProperties($dataResult)
	{
		$newDataResult = array();

		foreach ($dataResult as $key => $value) {

			//New array with others values to use in front-end
			$arrMaxMinW = $this->getMaxAndMinWeight($value);
			$newDataResult[$key] = array(
				'display_value' => $key,
				'max_w' => $arrMaxMinW['max'],
				'min_w' => $arrMaxMinW['min'],
				'data' => $value,
			);

			switch ($key) {
				//Custom:
				case 'r_pos':
					$newDataResult[$key]['display_value'] = 'Position';
					$newDataResult[$key]['color'] = '#a5b8da';
					break;
				case 'lemme':
					$newDataResult[$key]['display_value'] = 'Lemme';
					$newDataResult[$key]['color'] = '#7089b3';
					break;
				case 'info_semantique':
					$newDataResult[$key]['display_value'] = "Informations sémantiques";
					$newDataResult[$key]['color'] = '#ffd65e';
					break;
				case 'femenin_equivalent':
					$newDataResult[$key]['display_value'] = 'Feminin';
					$newDataResult[$key]['color'] = '#febf04';
					break;
				case 'variantes':
					$newDataResult[$key]['display_value'] = 'Variantes';
					$newDataResult[$key]['color'] = '#606c88';
					break;
				case 'definitions':
					$newDataResult[$key]['display_value'] = 'Defintion';
					$newDataResult[$key]['color'] = '#3f4c6b';
					break;
				case 'rafinement_semantique':
					$newDataResult[$key]['display_value'] = 'Rafinement Sémantique';
					$newDataResult[$key]['color'] = '#d5cea6';
					break;
				case 'gloses':
					$newDataResult[$key]['display_value'] = 'Gloses';
					$newDataResult[$key]['color'] = '#b7ad70';
					break;
				case 'inhib':
					$newDataResult[$key]['display_value'] = 'Autres sens';
					$newDataResult[$key]['color'] = '#a90329';
					break;
				case 'association_idees':
					$newDataResult[$key]['display_value'] = 'Ideés Associées';
					$newDataResult[$key]['color'] = '#6d0019';
					break;
				case 'tataki':
					$newDataResult[$key]['display_value'] = 'display_value';
					$newDataResult[$key]['color'] = '#4ba614';
					break;
				case 'wikipedia':
					$newDataResult[$key]['display_value'] = 'Wikipedia';
					$newDataResult[$key]['color'] = '#008c00';
					break;
				case 'concurrences':
					$newDataResult[$key]['display_value'] = 'Concurrences';
					$newDataResult[$key]['color'] = '#ff5db1';
					break;
				case 'themes_domaines':
					$newDataResult[$key]['display_value'] = "Thèmes du meme domaines";
					$newDataResult[$key]['color'] = '#ef007c';
					break;
				case 'synonimes':
					$newDataResult[$key]['display_value'] = 'Synonimes';
					$newDataResult[$key]['color'] = '#7d7e7d';
					break;
				case 'generiques':
					$newDataResult[$key]['display_value'] = 'Générique';
					$newDataResult[$key]['color'] = '#0e0e0e';
					break;
				case 'generiques_incompatibles':
					$newDataResult[$key]['display_value'] = 'Incompatible';
					$newDataResult[$key]['color'] = '#cef8ff';
					break;
				case 'specifiques':
					$newDataResult[$key]['display_value'] = 'Spécifiques';
					$newDataResult[$key]['color'] = '#7fe0f8';
					break;
				case 'instances':
					$newDataResult[$key]['display_value'] = 'Instances';
					$newDataResult[$key]['color'] = '#f2f9fe';
					break;
				case 'parties':
					$newDataResult[$key]['display_value'] = 'Parties';
					$newDataResult[$key]['color'] = '#d6f0fd';
					break;
				case 'fait_partie_de':
					$newDataResult[$key]['display_value'] = 'Fait partie de ';
					$newDataResult[$key]['color'] = '#fb83fa';
					break;
				case 'plus_intence':
					$newDataResult[$key]['display_value'] = 'Intense';
					$newDataResult[$key]['color'] = '#e93cec';
					break;
				case 'plus_gros':
					$newDataResult[$key]['display_value'] = 'Plus gros que';
					$newDataResult[$key]['color'] = '#3093c7';
					break;
				case 'moins_gros':
					$newDataResult[$key]['display_value'] = 'Moin gros que ';
					$newDataResult[$key]['color'] = '#1c5a85';
					break;
				case 'term_etymologiquement':
					$newDataResult[$key]['display_value'] = 'Terme etymologique';
					$newDataResult[$key]['color'] = '#a9db80';
					break;
				case 'locution_term_composes':
					$newDataResult[$key]['display_value'] = 'Termes composés';
					$newDataResult[$key]['color'] = '#96c56f';
					break;
				case 'caracteristiques':
					$newDataResult[$key]['display_value'] = 'Caractéristique';
					$newDataResult[$key]['color'] = '#b29af8';
					break;
				case 'ayant_caracteristique':
					$newDataResult[$key]['display_value'] = 'Ayant comme caractére ';
					$newDataResult[$key]['color'] = '#9174ed';
					break;
				case 'couleurs_pour':
					$newDataResult[$key]['display_value'] = 'Couleurs pour ';
					$newDataResult[$key]['color'] = '#f2f5f6';
					break;
				case 'lieux_trouver':
					$newDataResult[$key]['display_value'] = 'Lieux';
					$newDataResult[$key]['color'] = '#c8d7dc';
					break;
				case 'adjectif':
					$newDataResult[$key]['display_value'] = 'Adjectifs';
					$newDataResult[$key]['color'] = '#ffc579';
					break;
				case 'lieux_faire':
					$newDataResult[$key]['display_value'] = 'Lieux pour faire';
					$newDataResult[$key]['color'] = '#fb9d23';
					break;
				case 'que_peut_faire':
					$newDataResult[$key]['display_value'] = 'Que peux faire';
					$newDataResult[$key]['color'] = '#d3d3d3';
					break;
				case 'que_peut_on_faire':
					$newDataResult[$key]['display_value'] = 'Que peut on faire';
					$newDataResult[$key]['color'] = '#707070';
					break;
				case 'que_peut_on_faire':
					$newDataResult[$key]['display_value'] = 'Qui peut faire';
					$newDataResult[$key]['color'] = '#fcfac0';
					break;
				case 'que_peut_produire':
					$newDataResult[$key]['display_value'] = 'Que peut produire';
					$newDataResult[$key]['color'] = '#f6f283';
					break;
				case 'de_quoi_nourrir':
					$newDataResult[$key]['display_value'] = 'De quoi nourrire';
					$newDataResult[$key]['color'] = '#f4f5f5';
					break;
				case 'causes_associes':
					$newDataResult[$key]['display_value'] = 'Causes accocies ';
					$newDataResult[$key]['color'] = '#dfdddd';
					break;
				case 'moins-intense':
					$newDataResult[$key]['display_value'] = 'Moins intenqe que ';
					$newDataResult[$key]['color'] = '#f7e3e3';
					break;
				case 'apres_mettre_sa_ceinture':
					$newDataResult[$key]['display_value'] = 'apres mettre sa ceinture';
					$newDataResult[$key]['color'] = '#ffd7d7';
					break;
				case 'comme-predicat':
					$newDataResult[$key]['display_value'] = 'Predicat';
					$newDataResult[$key]['color'] = '#ff9a9a';
					break;
				case 'valeur_temp_dur_periode':
					$newDataResult[$key]['display_value'] = 'Valeur temps';
					$newDataResult[$key]['color'] = '#ff4040';
					break;
				case 'consequences_associes':
					$newDataResult[$key]['display_value'] = 'Conséquebces associes ';
					$newDataResult[$key]['color'] = '#a9a588';
					break;
				case 'contraires':
					$newDataResult[$key]['display_value'] = 'Contraires';
					$newDataResult[$key]['color'] = '#8e865b';
					break;
				case 'action_verbe':
					$newDataResult[$key]['display_value'] = 'Action verbe';
					$newDataResult[$key]['color'] = '#f62b2b';
					break;
				case 'sentiments_emotions':
					$newDataResult[$key]['display_value'] = 'Sentiment emotionelles';
					$newDataResult[$key]['color'] = '#d20202';
					break;
				case 'masculin_equivalent':
					$newDataResult[$key]['display_value'] = 'Masculin ';
					$newDataResult[$key]['color'] = '#a67939';
					break;
				case 'action_pouvant_etre_faites_rapidement':
					$newDataResult[$key]['display_value'] = 'Action pouvant etre faites rapidement';
					$newDataResult[$key]['color'] = '#845108';
					break;
				case 'roles':
					$newDataResult[$key]['display_value'] = 'Roles';
					$newDataResult[$key]['color'] = '#d2d2f9';
					break;
				case 'avec_quoi':
					$newDataResult[$key]['display_value'] = 'Avec quoi ';
					$newDataResult[$key]['color'] = '#a6a6f2';
					break;
				case 'form_incorrect':
					$newDataResult[$key]['display_value'] = 'Form incorrect';
					$newDataResult[$key]['color'] = '#49c0f0';
					break;
				case 'comme_instrument':
					$newDataResult[$key]['display_value'] = 'Comme instrument ';
					$newDataResult[$key]['color'] = '#2CAFE3';
					break;
				case 'avant_temporel':
					$newDataResult[$key]['display_value'] = 'Avant temporel';
					$newDataResult[$key]['color'] = '#CEDCE7';
					break;
				case 'implication_agentives_de_messe':
					$newDataResult[$key]['display_value'] = 'Implication agentives';
					$newDataResult[$key]['color'] = '#596a72';
					break;
				case 'qui_quoi_peut_manger':
					$newDataResult[$key]['display_value'] = 'Qui et quoi peut manger';
					$newDataResult[$key]['color'] = '#b6e026';
					break;
				case 'role_agentifs':
					$newDataResult[$key]['display_value'] = 'Roles agentifs';
					$newDataResult[$key]['color'] = '#abdc28';
					break;
				case 'comment_peut_on':
					$newDataResult[$key]['display_value'] = 'Comment';
					$newDataResult[$key]['color'] = '#eab92d';
					break;
				case 'comme_sujet':
					$newDataResult[$key]['display_value'] = 'Comme sujet ';
					$newDataResult[$key]['color'] = '#c79810';
					break;
				case 'comme_objet':
					$newDataResult[$key]['display_value'] = 'Comme objet';
					$newDataResult[$key]['color'] = '#45484d';
					break;
				case 'matiere':
					$newDataResult[$key]['display_value'] = 'Matiére';
					$newDataResult[$key]['color'] = '#000000';
					break;
				case 'ce_qui_produit':
					$newDataResult[$key]['display_value'] = 'Ce qui produit ';
					$newDataResult[$key]['color'] = '#92cfde';
					break;
				case 'ce_qui_soppose':
					$newDataResult[$key]['display_value'] = 'Ce qui suppose';
					$newDataResult[$key]['color'] = '#76bdd1';
					break;
				case 'a_quoi_proche':
					$newDataResult[$key]['display_value'] = ' proche à quoi ';
					$newDataResult[$key]['color'] = '#a7cfdf';
					break;
				case 'quantificateurs':
					$newDataResult[$key]['display_value'] = 'Quantificateurs';
					$newDataResult[$key]['color'] = '#23538a';
					break;
				case 'implication_ assosiee':
					$newDataResult[$key]['display_value'] = 'Implication assosiees';
					$newDataResult[$key]['color'] = '#E6E6E6';
					break;
				case 'est_souvent_accompagne':
					$newDataResult[$key]['display_value'] = 'Est souvent accompagné ';
					$newDataResult[$key]['color'] = '#CCCCCC';
					break;
				case 'ce_qui_est_lie_a':
					$newDataResult[$key]['display_value'] = 'Lié à ';
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'descend_de':
					$newDataResult[$key]['display_value'] = 'Descend de';
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'apres_banlieure_dortoir':
					$newDataResult[$key]['display_value'] = 'Apres banlieure dortoir';
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'adjectif_adverbe':
					$newDataResult[$key]['display_value'] = 'Adjectifs et adbverbes';
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'quoi_peut_on_ouvrir_compte':
					$newDataResult[$key]['display_value'] = 'Peut ton ouvrire Quoi avec ';
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'propriete_pertinent_pour':
					$newDataResult[$key]['display_value'] = 'Propriete pertinent pour ';
					$newDataResult[$key]['color'] = '#5cb85c';
					break;	
				case 'qui_peu_utiliser':
					$newDataResult[$key]['display_value'] = 'QUi peut utiliser ';
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'ayant_poisson_comestible_pour_element':
					$newDataResult[$key]['display_value'] = 'Ayant poisson comestible pour';
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'partie_de_word':
					$newDataResult[$key]['display_value'] = 'Partie de mot ';
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'participe_passe':
					$newDataResult[$key]['display_value'] = 'Participe passé ';
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'termes_etymologiquement_apparente':
					$newDataResult[$key]['display_value'] = 'Termes etymologiquement apparente';
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'equivalent_semantique':
					$newDataResult[$key]['display_value'] = 'Equivalente Sémantique';
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'co_hyponymes':
					$newDataResult[$key]['display_value'] = 'Hyponymes';
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'nom_de_propriete':
					$newDataResult[$key]['display_value'] = 'Nom de propriete';
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'comme_tete_syntaxique':
					$newDataResult[$key]['display_value'] = 'Tete syntaxique';
					$newDataResult[$key]['color'] = '#5cb85c';
				default:
					# code...
					break;
			}
		}
		return $newDataResult;
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