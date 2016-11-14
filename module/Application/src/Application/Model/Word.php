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
			    		//$dataResult['themes_domaines'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_domain':
			    		//$dataResult['themes_domaines'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		$dataResult['themes_domaines'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_raff_sem':
			    		$dataResult['rafinement_semantique'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_pos':
			    		$dataResult['r_pos'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_syn':
			    		$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_isa':
			    		$dataResult['generiques'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_anto':
			    		$dataResult['contraires'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_hypo':
			    		$dataResult['specifiques'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_has_part':
			    		$dataResult['parties'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_holo':
			    		$dataResult['fait_partie_de'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_locution':
			    		$dataResult['locution_term_composes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_agent':
			    		$dataResult['q	ui_quoi_peut_manger'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_patient':
			    		//$dataResult['Qui_quoi_peut_manger'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_flpot':
			    		//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);  ca  sert arien  FL_Numero
			    		break;
			    	case 'r_lieu':
			    		$dataResult['lieux_trouver'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_instr':
			    		$dataResult['avec_quoi'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_carac':
			    		$dataResult['caracteristiques'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_lemma':
			    		$dataResult['lemme'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_magn':
			    		$dataResult['plus_intence'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_antimagn':
			    		$dataResult['moins-intense'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_family':
			    		$dataResult['term_etymologiquement'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_carac_1':
			    		//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_agent_1':
			    		$dataResult['que_peut_on_faire'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_instr_1':
			    		//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_patient_1':
			    		$dataResult['que_peut_faire'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_domain_1':
			    		$dataResult['comme_objet'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_lieu_1':
			    		$dataResult['lieux_trouver'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_chunk_pred':
			    		$dataResult['comme-predicat'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_lieu_action':
			    		$dataResult['que_peut_on_faire'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	
			    	case 'r_sentiment':
			    		$dataResult['sentiments_emotions'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_error':
			    		$dataResult['form_incorrect'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_manner':
			    		$dataResult['comment_peut_on'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_meaning':
			    		$dataResult['gloses'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_infopot':
			    		$dataResult['info_semantique'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_telic_role':
			    		$dataResult['roles'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_agentif_role':
			    		$dataResult['role_agentifs'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_verbe_action':
			    		$dataResult['action_verbe'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_causatif':
			    		$dataResult['causes_associes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_conseq':
			    		$dataResult['consequences_associes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_chunk_sujet':
			    		$dataResult['comme_sujet'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_chunk_objet':
			    		$dataResult['comme_objet'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_chunk_instr':
				    	$dataResult['comme_instrument'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_aki':
			    		$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_time':
			    		$dataResult['valeur_temp_dur_periode'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_prev':
			    		//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    	//  ca n'existe pas dans la  base

			    		break;
			    	case 'r_succ':
			    		//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    	//  ca n'existe pas dans la  base
			    		break;
			    	case 'r_inhib':
			    		$dataResult['inhib'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_object_mater':
			    		$dataResult['matiere'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_successeur_time':
			    		$dataResult['apres_mettre_sa_ceinture'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_make':
			    		$dataResult['que_peut_produire'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_product_of':
			    		$dataResult['ce_qui_produit'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_against':
			    		$dataResult['a_quoi_proche'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_against_1':
				    	$dataResult['ce_qui_soppose'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_implication':
			    		$dataResult['implication_ assosiee'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_quantificateur':
			    		$dataResult['quantificateurs'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_masc':
			    		$dataResult['masculin_equivalent'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
		    		case 'r_fem':
			    		$dataResult['femenin_equivalent'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_equiv':
			    		$dataResult['equivalent_semantique'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
		    		case 'r_manner_1':
			    	$dataResult['action_pouvant_etre_faites_rapidement'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
		    		case 'r_agentive_implication':
			    		$dataResult['implication_agentives_de_messe'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
		    		case 'r_instance':
			    		$dataResult['instances'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
		    		case 'r_verb_real':
			    		$dataResult['termes_etymologiquement_apparente'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
		    		case 'r_termgroup':// GPHILO1
			    		//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
		    		case 'r_chunk_head':
			    		$dataResult['comme_tete_syntaxique'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
		    		case 'r_similar':// dificile
			    		//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
		    		case 'r_set_item':
			    		$dataResult['partie_de_word'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
		    		case 'r_item_set':
			    		$dataResult['ayant_poisson_comestible_pour_element'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
		    		case 'r_processus_gt_agent':// nexiste pas 
			    		//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
		    		case 'r_variante':
			    		$dataResult['variantes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
		    		case 'r_has_personnage':
			    		$dataResult['association_idee'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
		    		case 'r_has_auteur':
			    		$dataResult['association_idee'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_can_eat':
			    		$dataResult['de_quoi_nourrir'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_syn_strict':
			    		//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_has_actors':
			    		//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_deplac_mode':
			    		//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
			    		break;
			    	case 'r_der_morpho':
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_has_interpret':
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_color':
						$dataResult['couleurs_pour'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_learning_model':
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_wiki':
						$dataResult['wikipedia'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_annotation':
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_cible':
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_symptomes':
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_annotation_exception':
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_predecesseur_time':
						$dataResult['avant_temporel'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_diagnostique':
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_is_smaller_than':
						$dataResult['plus_gros'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_is_bigger_than':
						$dataResult['moins_gros'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_accomp':
						$dataResult['est_souvent_accompagne'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_predecesseur_space'://cite dort =)campagne
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_successeur_space':
						$dataResult['apres_banlieure_dortoir'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_beneficiaire':
						$dataResult['quoi_peut_on_ouvrir_compte'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_descend_de':// rhipidistien
						$dataResult['descend_de'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_social_tie'://Olivia De Havilland
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_tributary'://le mot Seine
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_sentiment_1':// anxiété je  trouve pas le q
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_linked_with':
						$dataResult['ce_qui_est_lie_a'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_domain_subst':// association idde
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_prop':
						$dataResult['propriete_pertinent_pour'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_foncteur':// les truc de _FL:15
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_comparison':// nexiste pas 
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_but':// nexiste pas 
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_processus_gt_patient':// nexiste pas 
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_but_1':// nexiste pas 
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_own':// voisin nexiste pas
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_own_1':// avec lemot voisine
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_compl_agent':// nexiste pas 
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_activ_voice':// nexiste pas 
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_cooccurrence'://
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_make_use_of':
						$dataResult['qui_peu_utiliser'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_is_used_by':// pas  troubve mot  grill
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_verb_ppas':
						$dataResult['participe_passe'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_verb_aux'://nexiste pas  dans la base 
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_cohypo':
						$dataResult['co_hyponymes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_adj_nomprop':
						$dataResult['adjectif'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_nomprop_adj':
						$dataResult['nom_de_propriete'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_adj_adv':
						$dataResult['adjectif_adverbe'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_predecesseur_logic'://cette relation nexsite 
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_successeur_logic':// nexsite pas
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
						break;
					case 'r_link': //cette relation nexsite pas
						//$dataResult['synonimes'][] = $row['q']->getProperties(['name', 't', 'w', 'nf']);
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
				'sort_field' => "w",// w -> weight, name -> name 
				'sort_dir' => "-",// + -> asc, - -> desc
				'visible' => "1",// 1 - 0
				'max_w' => $arrMaxMinW['max'],
				'min_w' => $arrMaxMinW['min'],
				'data' => $value,
			);

			switch ($key) {
				//Custom:
				case 'r_pos':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#a5b8da';
					break;
				case 'lemme':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#7089b3';
					break;
				case 'info_semantique':
					$newDataResult[$key]['display_value'] = "Informations sémantiques";
					$newDataResult[$key]['color'] = '#ffd65e';
					break;
				case 'femenin_equivalent':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#febf04';
					break;
				case 'variantes':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#606c88';
					break;
				case 'definitions':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#3f4c6b';
					break;
				case 'rafinement_semantique':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#d5cea6';
					break;
				case 'gloses':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#b7ad70';
					break;
				case 'inhib':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#a90329';
					break;
				case 'association_idees':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#6d0019';
					break;
				case 'tataki':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#4ba614';
					break;
				case 'wikipedia':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#008c00';
					break;
				case 'concurrences':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#ff5db1';
					break;
				case 'themes_domaines':
					$newDataResult[$key]['display_value'] = "Thèmes et Domaines";
					$newDataResult[$key]['color'] = '#ef007c';
					break;
				case 'synonimes':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#7d7e7d';
					break;
				case 'generiques':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#0e0e0e';
					break;
				case 'generiques_incompatibles':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#cef8ff';
					break;
				case 'specifiques':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#7fe0f8';
					break;
				case 'instances':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#f2f9fe';
					break;
				case 'parties':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#d6f0fd';
					break;
				case 'fait_partie_de':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#fb83fa';
					break;
				case 'plus_intence':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#e93cec';
					break;
				case 'plus_gros':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#3093c7';
					break;
				case 'moins_gros':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#1c5a85';
					break;
				case 'term_etymologiquement':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#a9db80';
					break;
				case 'locution_term_composes':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#96c56f';
					break;
				case 'caracteristiques':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#b29af8';
					break;
				case 'ayant_caracteristique':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#9174ed';
					break;
				case 'couleurs_pour':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#f2f5f6';
					break;
				case 'lieux_trouver':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#c8d7dc';
					break;
				case 'adjectif':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#ffc579';
					break;
				case 'lieux_faire':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#fb9d23';
					break;
				case 'que_peut_faire':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#d3d3d3';
					break;
				case 'que_peut_on_faire':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#707070';
					break;
				case 'que_peut_on_faire':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#fcfac0';
					break;
				case 'que_peut_produire':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#f6f283';
					break;
				case 'de_quoi_nourrir':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#f4f5f5';
					break;
				case 'causes_associes':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#dfdddd';
					break;
				case 'moins-intense':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#f7e3e3';
					break;
				case 'apres_mettre_sa_ceinture':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#ffd7d7';
					break;
				case 'comme-predicat':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#ff9a9a';
					break;
				case 'valeur_temp_dur_periode':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#ff4040';
					break;
				case 'consequences_associes':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#a9a588';
					break;
				case 'contraires':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#8e865b';
					break;
				case 'action_verbe':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#f62b2b';
					break;
				case 'sentiments_emotions':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#d20202';
					break;
				case 'masculin_equivalent':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#a67939';
					break;
				case 'action_pouvant_etre_faites_rapidement':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#845108';
					break;
				case 'roles':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#d2d2f9';
					break;
				case 'avec_quoi':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#a6a6f2';
					break;
				case 'form_incorrect':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#49c0f0';
					break;
				case 'comme_instrument':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#2CAFE3';
					break;
				case 'avant_temporel':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#CEDCE7';
					break;
				case 'implication_agentives_de_messe':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#596a72';
					break;
				case 'qui_quoi_peut_manger':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#b6e026';
					break;
				case 'role_agentifs':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#abdc28';
					break;
				case 'comment_peut_on':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#eab92d';
					break;
				case 'comme_sujet':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#c79810';
					break;
				case 'comme_objet':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#45484d';
					break;
				case 'matiere':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#000000';
					break;
				case 'ce_qui_produit':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#92cfde';
					break;
				case 'ce_qui_soppose':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#76bdd1';
					break;
				case 'a_quoi_proche':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#a7cfdf';
					break;
				case 'quantificateurs':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#23538a';
					break;
				case 'implication_ assosiee':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#E6E6E6';
					break;
				case 'est_souvent_accompagne':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#CCCCCC';
					break;
				case 'ce_qui_est_lie_a':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'descend_de':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'apres_banlieure_dortoir':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'adjectif_adverbe':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'quoi_peut_on_ouvrir_compte':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'propriete_pertinent_pour':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#5cb85c';
					break;	
				case 'qui_peu_utiliser':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'ayant_poisson_comestible_pour_element':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'partie_de_word':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'participe_passe':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'termes_etymologiquement_apparente':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'equivalent_semantique':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'co_hyponymes':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'nom_de_propriete':
					$newDataResult[$key]['display_value'] = $key;
					$newDataResult[$key]['color'] = '#5cb85c';
					break;
				case 'comme_tete_syntaxique':
					$newDataResult[$key]['display_value'] = $key;
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