Jeux de Mots
=======================

Hosts:
sudo  nano /etc/hosts
127.0.0.1 jeuxdemots.localhost

Apache:

/Applications/XAMPP/xamppfiles/etc/extra/httpd-vhosts.conf

    #Jeux de mots
    <VirtualHost viajemos.localhost>
        DocumentRoot "/Applications/XAMPP/xamppfiles/htdocs/jeuxdemots/zendfk/public"
        ServerName jeuxdemots.localhost
        ServerAlias www.jeuxdemots.localhost
        <Directory /path/to/zf2-app/public>
                DirectoryIndex index.php
                AllowOverride All
                Order allow,deny
                Allow from all
                <IfModule mod_authz_core.c>
                Require all granted
                </IfModule>
            </Directory>
    </VirtualHost>

->
http://jeuxdemots.localhost

Neo4j
=======================
php:
https://github.com/opensoftstudio/neo4j-ogm-module


Import:

cd /Users/jimmymunoz/Downloads/neo4j-community-3.0.6
./bin/neo4j console

// https://github.com/jexp/neo4j-shell-tools
./bin/neo4j-shell


import-cypher -d"," -i _nodes.csv CREATE (n:Node) SET n = row, n.id = toInt(row.eid n.name = (row.name n.t = toInt(row.t) n.w = toInt(row.w), n.nf = (row.nf)



USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM "file:/_nodes.csv" AS row
CREATE (n:Node)
SET n = row,
    n.id = toInt(row.eid),
    n.name = (row.name),
    n.t = toInt(row.t),
    n.w = toInt(row.w),
    n.nf = (row.nf)

CREATE CONSTRAINT ON (n:Node) ASSERT n.eid IS UNIQUE;


USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM "file:/associations.csv" AS row
CREATE (n:RelationType)
SET n = row,
    n.id = toInt(row.rtid),
    n.name = (row.name),
    n.nom_etendu = toInt(row.nom_etendu),
    n.info = toInt(row.info)

CREATE INDEX ON :RelationType(id)
    


USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_accomp.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_accomp { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_action-verbe.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_action-verbe { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_action_lieu.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_action_lieu { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_activ_voice.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_activ_voice { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_adj_adv.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_adj_adv { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_adj_nomprop.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_adj_nomprop { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_adj_verbe.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_adj_verbe { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_adv_adj.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_adv_adj { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_against.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_against { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_against_1.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_against_1 { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_agent.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_agent { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_agent_1.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_agent_1 { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_agentif_role.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_agentif_role { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_agentive_implication.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_agentive_implication { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_aki.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_aki { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_annotation.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_annotation { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_annotation_exception.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_annotation_exception { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_antimagn.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_antimagn { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_anto.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_anto { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_associated.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_associated { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_beneficiaire.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_beneficiaire { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_can_eat.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_can_eat { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_carac.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_carac { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_carac_1.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_carac_1 { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_causatif.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_causatif { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_chunk_head.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_chunk_head { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_chunk_instr.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_chunk_instr { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_chunk_objet.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_chunk_objet { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_chunk_pred.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_chunk_pred { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_chunk_sujet.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_chunk_sujet { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_cible.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_cible { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_cohypo.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_cohypo { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_color.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_color { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_compl_agent.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_compl_agent { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_conseq.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_conseq { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_cooccurrence.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_cooccurrence { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_data.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_data { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_deplac_mode.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_deplac_mode { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_der_morpho.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_der_morpho { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_descend_de.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_descend_de { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_diagnostique.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_diagnostique { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_domain.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_domain { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_domain_1.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_domain_1 { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_domain_subst.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_domain_subst { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_equiv.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_equiv { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_error.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_error { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_family.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_family { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_fem.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_fem { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_flpot.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_flpot { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_foncteur.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_foncteur { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_has_actors.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_has_actors { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_has_auteur.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_has_auteur { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_has_interpret.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_has_interpret { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_has_part.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_has_part { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_has_personnage.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_has_personnage { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_holo.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_holo { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_hypo.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_hypo { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_implication.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_implication { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_infopot.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_infopot { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_inhib.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_inhib { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_instance.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_instance { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_instr.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_instr { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_instr_1.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_instr_1 { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_is_bigger_than.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_is_bigger_than { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_is_smaller_than.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_is_smaller_than { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_is_used_by.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_is_used_by { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_isa.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_isa { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_item_set.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_item_set { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_learning_model.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_learning_model { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_lemma.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_lemma { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_lieu.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_lieu { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_lieu_1.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_lieu_1 { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_lieu_action.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_lieu_action { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_link.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_link { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_linked_with.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_linked_with { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_locution.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_locution { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_magn.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_magn { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_make.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_make { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_make_use_of.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_make_use_of { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_manner.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_manner { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_manner_1.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_manner_1 { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_masc.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_masc { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_mater_object.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_mater_object { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_meaning.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_meaning { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_nomprop_adj.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_nomprop_adj { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_object_mater.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_object_mater { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_own.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_own { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_own_1.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_own_1 { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_patient.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_patient { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_patient_1.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_patient_1 { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_pos.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_pos { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_predecesseur_logic.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_predecesseur_logic { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_predecesseur_space.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_predecesseur_space { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_predecesseur_time.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_predecesseur_time { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_processus_gt_agent.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_processus_gt_agent { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_processus_gt_patient.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_processus_gt_patient { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_product_of.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_product_of { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_prop.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_prop { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_quantificateur.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_quantificateur { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_raff_morpho.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_raff_morpho { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_raff_sem.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_raff_sem { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_sentiment.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_sentiment { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_sentiment_1.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_sentiment_1 { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_set>item.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_set>item { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_similar.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_similar { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_social_tie.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_social_tie { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_successeur_logic.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_successeur_logic { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_successeur_space.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_successeur_space { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_successeur_time.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_successeur_time { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_symptomes.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_symptomes { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_syn.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_syn { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_syn_strict.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_syn_strict { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_telic_role.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_telic_role { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_termgroup.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_termgroup { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_time.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_time { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_tributary.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_tributary { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_variante.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_variante { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_verb_aux.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_verb_aux { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_verb_ppas.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_verb_ppas { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_verb_real.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_verb_real { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_verbe-action.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_verbe-action { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_verbe_adj.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_verbe_adj { w: row[3], rid: row[4] }]->(Node2)



USING PERIODIC COMMIT
LOAD CSV FROM "file:/r_wiki.csv" AS row
MATCH (Node1:Node {eid: row[1]})
MATCH (Node2:Node {eid: row[2]})
MERGE (Node1)-[:r_wiki { w: row[3], rid: row[4] }]->(Node2)




ZendSkeletonApplication
=======================

Introduction
------------
This is a simple, skeleton application using the ZF2 MVC layer and module
systems. This application is meant to be used as a starting place for those
looking to get their feet wet with ZF2.

Installation using Composer
---------------------------

The easiest way to create a new ZF2 project is to use [Composer](https://getcomposer.org/). If you don't have it already installed, then please install as per the [documentation](https://getcomposer.org/doc/00-intro.md).


Create your new ZF2 project:

    composer create-project -n -sdev zendframework/skeleton-application path/to/install



### Installation using a tarball with a local Composer

If you don't have composer installed globally then another way to create a new ZF2 project is to download the tarball and install it:

1. Download the [tarball](https://github.com/zendframework/ZendSkeletonApplication/tarball/master), extract it and then install the dependencies with a locally installed Composer:

        cd my/project/dir
        curl -#L https://github.com/zendframework/ZendSkeletonApplication/tarball/master | tar xz --strip-components=1
    

2. Download composer into your project directory and install the dependencies:

        curl -s https://getcomposer.org/installer | php
        php composer.phar install

If you don't have access to curl, then install Composer into your project as per the [documentation](https://getcomposer.org/doc/00-intro.md).

Web server setup
----------------

### PHP CLI server

The simplest way to get started if you are using PHP 5.4 or above is to start the internal PHP cli-server in the root
directory:

    php -S 0.0.0.0:8080 -t public/ public/index.php

This will start the cli-server on port 8080, and bind it to all network
interfaces.

**Note:** The built-in CLI server is *for development only*.

### Vagrant server

This project supports a basic [Vagrant](http://docs.vagrantup.com/v2/getting-started/index.html) configuration with an inline shell provisioner to run the Skeleton Application in a [VirtualBox](https://www.virtualbox.org/wiki/Downloads).

1. Run vagrant up command

    vagrant up

2. Visit [http://localhost:8085](http://localhost:8085) in your browser

Look in [Vagrantfile](Vagrantfile) for configuration details.

### Apache setup

To setup apache, setup a virtual host to point to the public/ directory of the
project and you should be ready to go! It should look something like below:

    <VirtualHost *:80>
        ServerName zf2-app.localhost
        DocumentRoot /path/to/zf2-app/public
        <Directory /path/to/zf2-app/public>
            DirectoryIndex index.php
            AllowOverride All
            Order allow,deny
            Allow from all
            <IfModule mod_authz_core.c>
            Require all granted
            </IfModule>
        </Directory>
    </VirtualHost>

### Nginx setup

To setup nginx, open your `/path/to/nginx/nginx.conf` and add an
[include directive](http://nginx.org/en/docs/ngx_core_module.html#include) below
into `http` block if it does not already exist:

    http {
        # ...
        include sites-enabled/*.conf;
    }


Create a virtual host configuration file for your project under `/path/to/nginx/sites-enabled/zf2-app.localhost.conf`
it should look something like below:

    server {
        listen       80;
        server_name  zf2-app.localhost;
        root         /path/to/zf2-app/public;

        location / {
            index index.php;
            try_files $uri $uri/ @php;
        }

        location @php {
            # Pass the PHP requests to FastCGI server (php-fpm) on 127.0.0.1:9000
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_param  SCRIPT_FILENAME /path/to/zf2-app/public/index.php;
            include fastcgi_params;
        }
    }

Restart the nginx, now you should be ready to go!
