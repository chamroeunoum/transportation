<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Package;
use App\Models\Staff;

class Branch extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    /**
     * Get all of the staffs for the Branch
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function staffs()
    {
        return $this->hasMany(Staff::class, 'branch_id', 'id');
    }
    /**
     * Get all of the packages for the Branch
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function packages()
    {
        return $this->hasMany(Package::class, 'branch_id', 'id');
    }

}
