<?php
//https://github.com/lphuberdeau/Neo4j-PHP-OGM

namespace Application\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use HireVoice\Neo4j\Annotation as OGM;

/**
* @OGM\Entity
*/
class Node
{
    /**
     * The internal node ID from Neo4j must be stored. Thus an Auto field is required
     * @OGM\Auto
     */
    protected $id;

    /**
     * @OGM\Property
     * @OGM\Index
     */
    protected $eid;

    /**
     * @OGM\Property
     */
    protected $t;

     /**
     * @OGM\Property
     */
    protected $w;

     /**
     * @OGM\Property
     * @OGM\Index
     */
    protected $name;

     /**
     * @OGM\Property
     */
    protected $nf;

    
    /**
     * @param string $title
     * @param string|null $release
     */
    public function __construct()
    {
        
        $this->r_accomp = new ArrayCollection();
    }
    // Getters and Setters

}